import type { Response } from 'express'
import type { AuthRequest } from '../middleware/auth.middleware.js'
import { prisma } from '../lib/prisma.js'
import { uploadToR2, deleteFromR2, extractKeyFromUrl } from '../lib/r2.js'
import { processImage } from '../lib/imageProcesser.js'
import { photoQueue } from '../lib/queue.js'
import crypto from 'crypto'
import fs from 'fs'
import sharp from 'sharp'

/**
 * @name uploadPhotoController
 * @description Upload photos to an event. Organizers have no limit,
 *              attendees are limited by event.attendee_upload_limit
 * @route POST /photos/:eventId/upload
 * @access Private
 */
export async function uploadPhotoController(req: AuthRequest, res: Response) {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ message: 'User not authenticated' })
        }

        const eventId = req.params.eventId as string

        // req.files is populated by multer middleware
        // It contains the uploaded file bytes in memory
        const files = req.files as Express.Multer.File[]
        if (!files || files.length === 0) {
            return res.status(400).json({ message: 'No files uploaded' })
        }

        // Check user is a member of this event
        const eventAccess = await prisma.eventAccess.findUnique({
            where: {
                event_id_user_id: {
                    event_id: eventId,
                    user_id: req.user.id,
                }
            },
            include: {
                // Include event so we can check the upload limit
                event: true,
            }
        })

        if (!eventAccess) {
            return res.status(403).json({ message: 'You do not have access to this event' })
        }

        // Enforce upload limit for attendees only using atomic check-and-increment
        if (eventAccess.role === 'ATTENDEE') {
            const limit = eventAccess.event.attendee_upload_limit
            const userId = req.user.id
            const result = await prisma.$transaction(async (tx: any) => {
                const current = await tx.eventAccess.findUnique({
                    where: {
                        event_id_user_id: {
                            event_id: eventId,
                            user_id: userId,
                        }
                    },
                    select: { upload_count: true }
                })
                if (!current) throw new Error('Event access not found')
                if (current.upload_count + files.length > limit) {
                    return { success: false, current: current.upload_count, limit }
                }
                await tx.eventAccess.update({
                    where: {
                        event_id_user_id: {
                            event_id: eventId,
                            user_id: userId,
                        }
                    },
                    data: { upload_count: { increment: files.length } }
                })
                return { success: true, newCount: current.upload_count + files.length, limit }
            })
            if (!result.success) {
                const remainingQuota = result.limit - result.current
                return res.status(400).json({
                    message: remainingQuota <= 0
                        ? `Upload limit reached. You can upload a maximum of ${result.limit} photos per event.`
                        : `You can only upload ${remainingQuota} more photo(s). You tried to upload ${files.length}.`,
                    upload_count: result.current,
                    limit: result.limit,
                    remaining_quota: remainingQuota,
                })
            }
            // Store the new count for response
            ;(eventAccess as any).newUploadCount = result.newCount
        }

        // Validate each file is a valid image using sharp (not just client-controlled mimetype)
        for (const file of files) {
            try {
                await sharp(file.path).metadata()
            } catch (error) {
                // Clean up invalid file
                try {
                    if (fs.existsSync(file.path)) {
                        fs.unlinkSync(file.path)
                    }
                } catch (cleanupError) {
                    console.error(`Failed to delete invalid file ${file.path}:`, cleanupError)
                }
                return res.status(400).json({
                    message: `Invalid image file: ${file.originalname}. Only JPEG, PNG, WebP and HEIC images are allowed.`,
                })
            }
        }

        // Process and upload each file
        const uploadedPhotos = []
        const processedFiles: string[] = []

        try {
            for (const file of files) {
                // Generate a unique base path for this photo's 3 versions in R2
                // Using timestamp + random string ensures no collisions
                const photoId = crypto.randomUUID()
                const basePath = `events/${eventId}/${photoId}`

                // Compress the uploaded image into 3 versions using sharp
                // file.path is the temp file path from disk storage
                const { thumb, display, original } = await processImage(file.path)

                // Upload all 3 versions to R2 in parallel (faster than sequential)
                // Promise.all waits for all 3 uploads to finish before continuing
                const [thumbUrl, displayUrl, originalUrl] = await Promise.all([
                    uploadToR2(`${basePath}/thumb.jpg`, thumb, 'image/jpeg'),
                    uploadToR2(`${basePath}/display.jpg`, display, 'image/jpeg'),
                    uploadToR2(`${basePath}/original.webp`, original, 'image/webp'),
                ])

                // Save the photo record to the database
                // processed: false means face detection hasn't run yet
                const photo = await prisma.photo.create({
                    data: {
                        id: photoId,
                        event_id: eventId,
                        user_id: req.user.id,
                        thumb_url: thumbUrl,
                        display_url: displayUrl,
                        original_url: originalUrl,
                        processed: false,
                        is_visible: true,
                    }
                })

                // Add a job to the BullMQ queue for face detection
                // The worker will pick this up and call the Python service
                // We don't wait for this — it happens in the background
                // TODO: uncomment when momnts-vision is ready
                // await photoQueue.add('detect-faces', {
                //     photoId: photo.id,      // worker needs this to update processed = true
                //     eventId: eventId,       // worker needs this to scope face profiles
                //     displayUrl: displayUrl, // worker downloads this to run face detection
                // })

                uploadedPhotos.push(photo)
                processedFiles.push(file.path)
            }
        } finally {
            // Clean up temp files regardless of success or error
            for (const filePath of processedFiles) {
                try {
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath)
                    }
                } catch (err) {
                    // Log cleanup error but don't fail the request
                    console.error(`Failed to delete temp file ${filePath}:`, err)
                }
            }
        }


        // Build response — include remaining quota for attendees
        const response: Record<string, unknown> = {
            message: `${uploadedPhotos.length} photo(s) uploaded successfully. Face detection is running in the background.`,
            photos: uploadedPhotos,
        }

        if (eventAccess.role === 'ATTENDEE') {
            const newCount = (eventAccess as any).newUploadCount
            response.quota = {
                used: newCount,
                limit: eventAccess.event.attendee_upload_limit,
                remaining: eventAccess.event.attendee_upload_limit - newCount,
            }
        }

        return res.status(201).json(response)

    } catch (error) {
        const message = error instanceof Error ? error.message : 'Internal server error'
        return res.status(500).json({ message })
    }
}

/**
 * @name getEventPhotosController
 * @description Get all photos in an event.
 *              Organizers see all photos, attendees see only visible ones.
 * @route GET /photos/:eventId
 * @access Private
 */
export async function getEventPhotosController(req: AuthRequest, res: Response) {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ message: 'User not authenticated' })
        }

        const eventId = req.params.eventId as string

        const eventAccess = await prisma.eventAccess.findUnique({
            where: {
                event_id_user_id: {
                    event_id: eventId,
                    user_id: req.user.id,
                }
            }
        })

        if (!eventAccess) {
            return res.status(403).json({ message: 'You do not have access to this event' })
        }

        const photos = await prisma.photo.findMany({
            where: {
                event_id: eventId,
                // Organizers see everything including hidden photos
                // Attendees only see visible photos
                ...(eventAccess.role === 'ATTENDEE' && { is_visible: true }),
            },
            include: {
                // Include uploader's name so UI can show "Uploaded by Asrar"
                user: {
                    select: { id: true, name: true }
                },
                // Include face count so UI can show how many faces were detected
                _count: {
                    select: { photo_faces: true }
                }
            },
            orderBy: { uploaded_at: 'desc' }
        })

        return res.status(200).json({
            message: 'Photos retrieved successfully',
            data: photos,
        })

    } catch (error) {
        const message = error instanceof Error ? error.message : 'Internal server error'
        return res.status(500).json({ message })
    }
}

/**
 * @name getPhotoDetailController
 * @description Get a single photo with all detected face bounding boxes.
 *              Used to highlight faces in the photo detail view.
 * @route GET /photos/:eventId/:photoId
 * @access Private
 */
export async function getPhotoDetailController(req: AuthRequest, res: Response) {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ message: 'User not authenticated' })
        }

        const eventId = req.params.eventId as string
        const photoId = req.params.photoId as string

        // Verify event access
        const eventAccess = await prisma.eventAccess.findUnique({
            where: {
                event_id_user_id: {
                    event_id: eventId,
                    user_id: req.user.id,
                }
            }
        })

        if (!eventAccess) {
            return res.status(403).json({ message: 'You do not have access to this event' })
        }

        const photo = await prisma.photo.findUnique({
            where: { id: photoId },
            include: {
                user: { select: { id: true, name: true } },
                // photo_faces contains bounding boxes for each detected face
                // bbox_x, bbox_y, bbox_w, bbox_h tell the UI where to draw the highlight box
                photo_faces: {
                    include: {
                        face_profile: {
                            select: {
                                id: true,
                                is_claimed: true,
                                claimed_by: true,
                            }
                        }
                    }
                }
            }
        })

        if (!photo) {
            return res.status(404).json({ message: 'Photo not found' })
        }
        if (photo.event_id !== eventId) {
            return res.status(404).json({ message: 'Photo not found' })
        }
        // Attendees can't see hidden photos
        if (eventAccess.role === 'ATTENDEE' && !photo.is_visible) {
            return res.status(404).json({ message: 'Photo not found' })
        }

        return res.status(200).json({
            message: 'Photo retrieved successfully',
            data: photo,
        })

    } catch (error) {
        const message = error instanceof Error ? error.message : 'Internal server error'
        return res.status(500).json({ message })
    }
}

/**
 * @name deletePhotoController
 * @description Delete a photo.
 *              Organizers can delete any photo.
 *              Attendees can only delete their own uploads (and get quota back).
 * @route DELETE /photos/:eventId/:photoId
 * @access Private
 */
export async function deletePhotoController(req: AuthRequest, res: Response) {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ message: 'User not authenticated' })
        }

        const eventId = req.params.eventId as string
        const photoId = req.params.photoId as string

        const eventAccess = await prisma.eventAccess.findUnique({
            where: {
                event_id_user_id: {
                    event_id: eventId,
                    user_id: req.user.id,
                }
            }
        })

        if (!eventAccess) {
            return res.status(403).json({ message: 'You do not have access to this event' })
        }

        const photo = await prisma.photo.findUnique({
            where: { id: photoId }
        })

        if (!photo) {
            return res.status(404).json({ message: 'Photo not found' })
        }

        if (photo.event_id !== eventId) {
            return res.status(404).json({ message: 'Photo not found' })
        }

        // Attendees can only delete their own photos
        if (eventAccess.role === 'ATTENDEE' && photo.user_id !== req.user.id) {
            return res.status(403).json({ message: 'You can only delete your own photos' })
        }

        // Delete from DB — cascades to PhotoFace rows automatically
        await prisma.photo.delete({ where: { id: photoId, event_id: eventId } })

        // Delete all 3 versions from R2
        // extractKeyFromUrl converts full URL → R2 key
        // e.g. "https://pub-xxx.r2.dev/events/abc/thumb.jpg" → "events/abc/thumb.jpg"
        await Promise.all([
            deleteFromR2(extractKeyFromUrl(photo.thumb_url)),
            deleteFromR2(extractKeyFromUrl(photo.display_url)),
            deleteFromR2(extractKeyFromUrl(photo.original_url)),
        ])

        // Give the quota slot back to the attendee
        if (eventAccess.role === 'ATTENDEE') {
            await prisma.eventAccess.update({
                where: {
                    event_id_user_id: {
                        event_id: eventId,
                        user_id: req.user.id,
                    }
                },
                data: {
                    upload_count: { decrement: 1 } // atomic decrement
                }
            })
        }

        return res.status(200).json({ message: 'Photo deleted successfully' })

    } catch (error) {
        const message = error instanceof Error ? error.message : 'Internal server error'
        return res.status(500).json({ message })
    }
}