import multer from 'multer'

// Multer is middleware that handles multipart/form-data requests
// (the format browsers use when submitting file uploads)
// It intercepts the request, reads the file bytes, and puts them on req.files

// memoryStorage means files are held in RAM as Buffer objects
// instead of being saved to disk — we want this because we're
// going to compress them with sharp and upload to R2 immediately
const storage = multer.memoryStorage()

export const upload = multer({
  storage,

  // Only accept image files
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/heic']
    if (allowed.includes(file.mimetype)) {
      cb(null, true)  // accept the file
    } else {
      cb(new Error('Only JPEG, PNG, WebP and HEIC images are allowed'))
    }
  },

  limits: {
    fileSize: 20 * 1024 * 1024, // 20MB max per file
    files: 10,                   // max 10 files per request
  },
})