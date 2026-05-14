import multer from 'multer'
import path from 'path'
import fs from 'fs'

// Multer is middleware that handles multipart/form-data requests
// (the format browsers use when submitting file uploads)
// It intercepts the request, reads the file bytes, and puts them on req.files

// Memory storage because files arrive as Buffer in req.file.buffer
// and we process them directly with sharp without writing to disk
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
    fileSize: 10 * 1024 * 1024, // 10MB max per file
    files: 10,                   // max 10 files per request
  },
})