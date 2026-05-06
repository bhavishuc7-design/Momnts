import 'dotenv/config'
import { Worker } from 'bullmq'
import { redis } from '../lib/redis.js'
import { prisma } from '../lib/prisma.js'
import axios from 'axios'
import { randomUUID } from 'crypto'

const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL!
const SIMILARITY_THRESHOLD = 0.6

// Worker listens to the photo-processing queue
// and processes one job at a time
const worker = new Worker(
  'photo-processing',

  async (job) => {
    const { photoId, eventId, displayUrl } = job.data

    console.log(`Processing job for photo: ${photoId}`)

    try {
      // ── Step 1: Call Python service to detect faces ──
      // Send the photo URL — Python downloads it, runs DeepFace, returns faces
      const { data } = await axios.post(`${PYTHON_SERVICE_URL}/detect`, {
        photo_id: photoId,
        image_url: displayUrl,
      })

      const faces = data.faces // array of { bbox, embedding, confidence }

      console.log(`Detected ${faces.length} face(s) in photo ${photoId}`)

      if (faces.length === 0) {
        // No faces found — just mark as processed and exit
        await prisma.photo.update({
          where: { id: photoId },
          data: { processed: true }
        })
        return
      }

      // ── Step 2: For each detected face, find or create a FACE_PROFILE ──
      for (const face of faces) {
        const { bbox, embedding, confidence } = face

        // Convert embedding array to pgvector string format
        // pgvector expects: '[0.1, 0.2, 0.3, ...]'
        const vectorString = `[${embedding.join(',')}]`

        // Search for an existing face profile in this event
        // that is similar to this embedding using cosine similarity
        // <=> is the pgvector cosine distance operator
        // distance of 0.0 = identical, 2.0 = completely different
        // we convert threshold: similarity 0.6 → distance 0.4
        const existingProfiles = await prisma.$queryRaw<Array<{
          id: string
          distance: number
        }>>`
          SELECT id, embedding_vector <=> ${vectorString}::vector AS distance
          FROM "FaceProfile"
          WHERE event_id = ${eventId}
          ORDER BY distance ASC
          LIMIT 1
        `

        let faceProfileId: string

        if (
          existingProfiles.length > 0 &&
          existingProfiles[0].distance < (1 - SIMILARITY_THRESHOLD)
        ) {
          // ── Match found — link to existing profile ──
          faceProfileId = existingProfiles[0].id
          console.log(`  Face matched to existing profile: ${faceProfileId} (distance: ${existingProfiles[0].distance.toFixed(3)})`)

        } else {
          // No match — create new profile with pre-generated ID
          const newProfileId = randomUUID()

          await prisma.$executeRaw`
                    INSERT INTO "FaceProfile" (id, event_id, embedding_vector, is_claimed, created_at)
                    VALUES (
                      ${newProfileId}::uuid,
                      ${eventId}::uuid,
                      ${vectorString}::vector,
                      false,
                      NOW()
                    )
                  `

          faceProfileId = newProfileId
          console.log(`  New face profile created: ${faceProfileId}`)
        }

        // ── Step 3: Create PHOTO_FACE row ──
        // Links this photo to the face profile with bounding box
        await prisma.photoFace.create({
          data: {
            photo_id: photoId,
            face_profile_id: faceProfileId,
            bbox_x: bbox.x,
            bbox_y: bbox.y,
            bbox_w: bbox.w,
            bbox_h: bbox.h,
            confidence: confidence,
          }
        })

        console.log(`  PhotoFace row created for profile: ${faceProfileId}`)
      }

      // ── Step 4: Mark photo as processed ──
      await prisma.photo.update({
        where: { id: photoId },
        data: { processed: true }
      })

      console.log(`Photo ${photoId} processing complete`)

    } catch (error) {
      console.error(`Error processing photo ${photoId}:`, error)
      // Throwing re-queues the job for retry (BullMQ handles this)
      throw error
    }
  },

  {
    connection: redis,
    concurrency: 2, // process 2 photos at a time
  }
)

worker.on('completed', (job) => {
  console.log(`Job ${job.id} completed`)
})

worker.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed:`, err.message)
})

console.log('Photo processing worker started')