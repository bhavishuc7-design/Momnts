import 'dotenv/config';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';

/**
 * Cloudflare R2 Client
 */
export const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
  forcePathStyle: true,

  // Important for R2 compatibility
  requestChecksumCalculation: 'WHEN_REQUIRED',
});

/**
 * Upload file to R2
 */
export async function uploadToR2(
  key: string,
  body: Buffer,
  contentType: string
): Promise<string> {
  if (!process.env.R2_BUCKET_NAME) {
    throw new Error('R2_BUCKET_NAME is not defined');
  }

  await r2.send(
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      Body: body,
      ContentType: contentType,
    })
  );

  return `${process.env.R2_PUBLIC_URL}/${key}`;
}

/**
 * Delete file from R2
 */
export async function deleteFromR2(key: string): Promise<void> {
  if (!process.env.R2_BUCKET_NAME) {
    throw new Error('R2_BUCKET_NAME is not defined');
  }

  await r2.send(
    new DeleteObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
    })
  );
}