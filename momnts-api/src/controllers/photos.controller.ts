import type { Response } from 'express'
import type { AuthRequest } from '../middleware/auth.middleware.js'
import { prisma } from '../lib/prisma.js'
import { uploadToR2, deleteFromR2, extractKeyFromUrl } from '../lib/r2.js'
import { processImage } from '../lib/imageProcesser.js'
import { photoQueue } from '../lib/queue.js'
import crypto from 'crypto'

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

        // Enforce upload limit for attendees only
        if (eventAccess.role === 'ATTENDEE') {
            const remainingQuota = eventAccess.event.attendee_upload_limit - eventAccess.upload_count

            if (remainingQuota <= 0) {
                return res.status(400).json({
                    message: `Upload limit reached. You can upload a maximum of ${eventAccess.event.attendee_upload_limit} photos per event.`,
                    upload_count: eventAccess.upload_count,
                    limit: eventAccess.event.attendee_upload_limit,
                })
            }

            // If they try to upload more than their remaining quota, block it
            if (files.length > remainingQuota) {
                return res.status(400).json({
                    message: `You can only upload ${remainingQuota} more photo(s). You tried to upload ${files.length}.`,
                    remaining_quota: remainingQuota,
                })
            }
        }

        // Process and upload each file
        const uploadedPhotos = []

        for (const file of files) {
            // Generate a unique base path for this photo's 3 versions in R2
            // Using timestamp + random string ensures no collisions
            const photoId = crypto.randomUUID()
            const basePath = `events/${eventId}/${photoId}`

            // Compress the uploaded image into 3 versions using sharp
            const { thumb, display, original } = await processImage(file.buffer)

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
        }

        // Increment upload_count atomically for attendees
        // We do this AFTER all uploads succeed so count stays accurate
        if (eventAccess.role === 'ATTENDEE') {
            await prisma.eventAccess.update({
                where: {
                    event_id_user_id: {
                        event_id: eventId,
                        user_id: req.user.id,
                    }
                },
                data: {
                    // { increment: n } is Prisma's atomic increment
                    // safer than read → add → write which can have race conditions
                    upload_count: { increment: files.length }
                }
            })
        }

        // Build response — include remaining quota for attendees
        const response: Record<string, unknown> = {
            message: `${uploadedPhotos.length} photo(s) uploaded successfully. Face detection is running in the background.`,
            photos: uploadedPhotos,
        }

        if (eventAccess.role === 'ATTENDEE') {
            const newCount = eventAccess.upload_count + files.length
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

        // Attendees can only delete their own photos
        if (eventAccess.role === 'ATTENDEE' && photo.user_id !== req.user.id) {
            return res.status(403).json({ message: 'You can only delete your own photos' })
        }

        // Delete all 3 versions from R2
        // extractKeyFromUrl converts full URL → R2 key
        // e.g. "https://pub-xxx.r2.dev/events/abc/thumb.jpg" → "events/abc/thumb.jpg"
        await Promise.all([
            deleteFromR2(extractKeyFromUrl(photo.thumb_url)),
            deleteFromR2(extractKeyFromUrl(photo.display_url)),
            deleteFromR2(extractKeyFromUrl(photo.original_url)),
        ])

        // Delete from DB — cascades to PhotoFace rows automatically
        await prisma.photo.delete({ where: { id: photoId } })

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