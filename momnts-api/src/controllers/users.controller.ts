import type { Response } from 'express'
import { prisma } from '../lib/prisma.js'
import { uploadToR2, deleteFromR2, extractKeyFromUrl } from '../lib/r2.js'
import sharp from 'sharp'
import axios from 'axios'
import type { AuthRequest } from '../middleware/auth.middleware.js'
import { unlink } from 'fs/promises'

/**
 * Updates the user's selfie.
 * Compresses the image, overwrites the old selfie in R2,
 * generates a new embedding, and updates the DB.
 */
export async function updateSelfieController(req: AuthRequest, res: Response) {
  try {
    const userId = req.user?.id
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    if (!req.file) {
      return res.status(400).json({ message: "No selfie uploaded" })
    }

    // 1. Fetch existing selfie URL to delete from R2 later
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
      select: { selfie_url: true }
    })
    const oldSelfieUrl = existingUser?.selfie_url

    // 2. Compress selfie (800x800 jpeg 90)
    const compressedSelfie = await sharp(req.file.path)
      .resize(800, 800, { fit: 'inside' })
      .jpeg({ quality: 90 })
      .toBuffer()

    // Clean up temp file
    await unlink(req.file.path).catch(() => {})

    // 3. Delete old selfie from R2 if it exists
    if (oldSelfieUrl) {
      try {
        const oldKey = extractKeyFromUrl(oldSelfieUrl)
        await deleteFromR2(oldKey)
        console.log(`Deleted old selfie from R2: ${oldKey}`)
      } catch (error) {
        console.error('Failed to delete old selfie from R2:', error)
        // Continue even if delete fails - don't block the update
      }
    }

    // 4. Upload new selfie to R2 with unique key (timestamp prevents CDN cache)
    const r2Key = `selfies/${userId}/selfie-${Date.now()}.jpg`
    const selfieUrl = await uploadToR2(r2Key, compressedSelfie, 'image/jpeg')

    // 4. Call Python /embed → get new embedding
    const pythonServiceUrl = process.env.PYTHON_SERVICE_URL || 'http://localhost:8000'
    
    let embedding: number[]
    try {
      const response = await axios.post(`${pythonServiceUrl}/embed`, {
        selfie_url: selfieUrl
      })
      embedding = response.data.embedding
    } catch (error: any) {
      console.error('Vision service error during update:', error.response?.data || error.message)
      if (error.response?.status === 400) {
        return res.status(400).json({ 
          message: "No face detected. Please upload a clear photo of your face." 
        })
      }
      return res.status(500).json({ 
        message: "Face processing failed. Please try again." 
      })
    }

    // 5. Update User in DB with new selfie_url and selfie_embedding
    const vectorString = `[${embedding.join(',')}]`
    await prisma.$executeRaw`
      UPDATE "User"
      SET selfie_url = ${selfieUrl},
          selfie_embedding = ${vectorString}::vector
      WHERE id = ${userId}
    `

    // 6. Unclaim all previously claimed FaceProfiles (old selfie matches are stale)
    await prisma.faceProfile.updateMany({
      where: { claimed_by: userId },
      data: { claimed_by: null, is_claimed: false }
    })

    // 7. Return 200
    // Note: matching will run automatically when user creates or joins new events
    return res.status(200).json({
      message: "Selfie updated successfully",
      selfie_url: selfieUrl
    })

  } catch (error: any) {
    console.error('Selfie update error:', error)
    return res.status(500).json({ message: error.message || "Internal server error" })
  }
}

/**
 * Updates the user's profile (name).
 */
export async function updateProfileController(req: AuthRequest, res: Response) {
  try {
    const userId = req.user?.id
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    const { name } = req.body
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ message: "Name is required" })
    }

    if (name.trim().length > 50) {
      return res.status(400).json({ message: "Name must be less than 50 characters" })
    }

    // Update user name in DB
    await prisma.user.update({
      where: { id: userId },
      data: { name: name.trim() }
    })

    return res.status(200).json({
      message: "Profile updated successfully",
      name: name.trim()
    })

  } catch (error: any) {
    console.error('Profile update error:', error)
    return res.status(500).json({ message: error.message || "Internal server error" })
  }
}
