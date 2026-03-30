import 'dotenv/config';
import { uploadToR2 } from './lib/r2';

async function main() {
  try {
    console.log("ENV CHECK:", {
      accountId: process.env.R2_ACCOUNT_ID,
      bucket: process.env.R2_BUCKET_NAME,
      publicUrl: process.env.R2_PUBLIC_URL,
    });

    const buffer = Buffer.from('hello from momnts 🚀');

    const url = await uploadToR2(
      'test/hello.txt',   
      buffer,
      'text/plain'
    );

    console.log('✅ Upload successful:', url);
  } catch (err) {
    console.error('❌ Upload failed:', err);
  }
}

main();