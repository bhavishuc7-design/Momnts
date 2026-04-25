import sharp from 'sharp'

// Sharp is an image processing library
// It can resize, compress, and convert images very efficiently
// We create 3 versions of every photo:
//   thumb   — tiny version for grid/gallery view (fast to load)
//   display — medium version for when user opens a photo
//   original — full quality for when user downloads

interface ProcessedPhoto {
  thumb: Buffer      // ~25KB  — shown in photo grid
  display: Buffer    // ~600KB — shown when photo is opened
  original: Buffer   // ~2.5MB — served on download
}

export async function processImage(input: Buffer | string): Promise<ProcessedPhoto> {
  // Create a sharp instance from the raw uploaded bytes or file path
  // We reuse the same input for all 3 versions
  const image = sharp(input).rotate()

  // thumb — small square crop, heavily compressed
  // Used in photo grid where many images load at once
  const thumb = await image
    .clone() // clone so we can process the same image multiple times
    .resize(400, 400, {
      fit: 'cover',    // crop to fill the square (like Instagram thumbnails)
      position: 'center',
    })
    .jpeg({ quality: 70 }) // 70% quality — good enough for thumbnails
    .toBuffer()

  // display — max 2400px wide, good quality
  // Used when attendee taps on a photo to view it
  const display = await image
    .clone()
    .resize(2400, 2400, {
      fit: 'inside',            // preserve aspect ratio, don't crop
      withoutEnlargement: true, // don't upscale small images
    })
    .jpeg({ quality: 82, progressive: true })
    // progressive: true means the image loads gradually (blurry → sharp)
    // instead of top-to-bottom, which feels faster to the user
    .toBuffer()

  // original — lossless WebP, closest to the uploaded file
  // Used only when user explicitly downloads the photo
  const original = await image
    .clone()
    .webp({ lossless: true }) // lossless = no quality loss, just better compression
    .toBuffer()

  return { thumb, display, original }
}