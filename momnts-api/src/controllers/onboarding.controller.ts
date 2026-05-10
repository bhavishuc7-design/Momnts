import { Response } from 'express'
import { prisma } from '../lib/prisma.js'
import { uploadToR2 } from '../lib/r2.js'
import sharp from 'sharp'
import axios from 'axios'
import { AuthRequest } from '../middleware/auth.middleware.js'

/**
 * Handles selfie upload during onboarding.
 * Compresses the image, uploads to R2, gets embedding from vision service,
 * and updates the user record with the URL and embedding vector.
 */
export async function uploadSelfieController(req: AuthRequest, res: Response) {
  try {
    const userId = req.user?.id
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    if (!req.file) {
      return res.status(400).json({ message: "No selfie uploaded" })
    }

    // 3. Compress the selfie using sharp
    // Since we use diskStorage, we read from path
    const compressedSelfie = await sharp(req.file.path)
      .resize(800, 800, { fit: 'inside' })
      .jpeg({ quality: 90 })
      .toBuffer()

    // Clean up temp file immediately after reading into buffer
    import('fs').then(fs => fs.unlink(req.file!.path, () => {}))

    // 4. Upload to R2 with unique key (timestamp prevents CDN cache)
    const r2Key = `selfies/${userId}/selfie-${Date.now()}.jpg`
    const selfieUrl = await uploadToR2(r2Key, compressedSelfie, 'image/jpeg')

    // 5. Call Python /embed
    // POST ${PYTHON_SERVICE_URL}/embed
    const pythonServiceUrl = process.env.PYTHON_SERVICE_URL || 'http://localhost:8000'
    
    let embedding: number[]
    try {
      const response = await axios.post(`${pythonServiceUrl}/embed`, {
        selfie_url: selfieUrl
      })
      embedding = response.data.embedding
    } catch (error: any) {
      console.error('Vision service error:', error.response?.data || error.message)
      if (error.response?.status === 400) {
        return res.status(400).json({ 
          message: "No face detected. Please upload a clear photo of your face." 
        })
      }
      return res.status(500).json({ 
        message: "Face processing failed. Please try again." 
      })
    }

    // 6. Convert embedding array to pgvector string: [x,y,z...]
    const vectorString = `[${embedding.join(',')}]`

    // 7. Update user in DB using prisma.$executeRaw
    // We must use ::vector cast for pgvector
    await prisma.$executeRaw`
      UPDATE "User"
      SET selfie_url = ${selfieUrl},
          selfie_embedding = ${vectorString}::vector
      WHERE id = ${userId}
    `

    // 8. Return 200
    return res.status(200).json({
      message: "Selfie uploaded successfully",
      selfie_url: selfieUrl
    })

  } catch (error: any) {
    console.error('Selfie upload error:', error)
    return res.status(500).json({ message: error.message || "Internal server error" })
  }
}
