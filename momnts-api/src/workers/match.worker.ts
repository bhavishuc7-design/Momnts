import { Worker, Job } from 'bullmq'
import { redis } from '../lib/redis.js'
import { prisma } from '../lib/prisma.js'
import { publishFaceMatched } from '../lib/publisher.js'

interface MatchJobData {
  userId: string
  eventId: string
}

/**
 * Computes cosine similarity between two numeric arrays.
 */
function cosineSimilarity(vecA: number[], vecB: number[]): number {
  let dotProduct = 0
  let magA = 0
  let magB = 0
  
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i]
    magA += vecA[i] * vecA[i]
    magB += vecB[i] * vecB[i]
  }
  
  magA = Math.sqrt(magA)
  magB = Math.sqrt(magB)
  
  if (magA === 0 || magB === 0) return 0
  return dotProduct / (magA * magB)
}

/**
 * Background worker to match a specific user's selfie against
 * detected faces in an event.
 */
const matchWorker = new Worker(
  'face-matching',
  async (job: Job<MatchJobData>) => {
    const { userId, eventId } = job.data
    console.log(`Processing face-matching for user ${userId} in event ${eventId}`)

    try {
      // 1. Fetch the user's selfie_embedding
      const users = await prisma.$queryRaw<any[]>`
        SELECT selfie_embedding::text as embedding_text
        FROM "User" WHERE id = ${userId}
      `
      
      if (!users.length || !users[0].embedding_text) {
        console.log(`No selfie embedding found for user ${userId}. Returning early.`)
        return
      }

      // Parse pgvector string "[0.1, 0.2, ...]" into float array
      const userEmbedding = users[0].embedding_text
        .replace('[', '')
        .replace(']', '')
        .split(',')
        .map(Number)

      // 2. Fetch all unclaimed FaceProfiles for this event
      const profiles = await prisma.$queryRaw<any[]>`
        SELECT id, embedding_vector::text as embedding_text
        FROM "FaceProfile"
        WHERE event_id = ${eventId} AND is_claimed = false
      `

      if (!profiles.length) {
        console.log(`No unclaimed face profiles found in event ${eventId}`)
        return
      }

      const MATCH_THRESHOLD = 0.80
      const matchedIds: string[] = []

      // 3. For each profile compute cosine similarity
      for (const profile of profiles) {
        const profileEmbedding = profile.embedding_text
          .replace('[', '')
          .replace(']', '')
          .split(',')
          .map(Number)

        const similarity = cosineSimilarity(userEmbedding, profileEmbedding)

        if (similarity >= MATCH_THRESHOLD) {
          matchedIds.push(profile.id)
          console.log(`  Profile ${profile.id} matched with similarity ${similarity.toFixed(4)}`)
        }
      }

      // 4. Claim ALL profiles above threshold
      if (matchedIds.length > 0) {
        await prisma.faceProfile.updateMany({
          where: { id: { in: matchedIds } },
          data: { 
            claimed_by: userId, 
            is_claimed: true 
          }
        })

        // Count how many distinct photos are linked to the matched profiles
        const matchedPhotos = await prisma.photoFace.findMany({
          where: { face_profile_id: { in: matchedIds } },
          select: { photo_id: true },
          distinct: ['photo_id'],
        })

        // Publish WebSocket event so frontend can show toast
        await publishFaceMatched({
          eventId,
          userId,
          matchedPhotoCount: matchedPhotos.length,
          matchedProfileIds: matchedIds,
        })

        console.log(`Matched user ${userId} to ${matchedIds.length} FaceProfile(s) in event ${eventId} (${matchedPhotos.length} photos)`)
      } else {
        console.log(`No matching face profile found for user ${userId} in event ${eventId}`)
      }

    } catch (error) {
      console.error(`Face-matching job failed for user ${userId}:`, error)
      throw error
    }
  },
  { 
    connection: redis, 
    concurrency: 3 
  }
)

matchWorker.on('completed', (job) => {
  console.log(`Face-matching job ${job.id} completed`)
})

matchWorker.on('failed', (job, err) => {
  console.error(`Face-matching job ${job?.id} failed with error: ${err.message}`)
})

export default matchWorker
