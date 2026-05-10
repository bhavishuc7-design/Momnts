const API_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000"

export interface PhotoData {
  id: string
  event_id: string
  user_id: string
  thumb_url: string
  display_url: string
  original_url: string
  width?: number
  height?: number
  uploaded_at: string
  processed: boolean
  is_visible: boolean
  user?: {
    id: string
    name: string
  }
  _count?: {
    photo_faces: number
  }
}

export interface UploadResponse {
  message: string
  photos: PhotoData[]
  quota?: {
    used: number
    limit: number | null
    remaining: number | null
  }
}

export const photosApi = {
  async getEventPhotos(eventId: string): Promise<PhotoData[]> {
    const response = await fetch(`${API_URL}/api/photos/${eventId}`, {
      credentials: "include",
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Failed to fetch photos")
    }

    const data = await response.json()
    return data.data || []
  },

  async getPhotoDetail(eventId: string, photoId: string): Promise<PhotoData> {
    const response = await fetch(`${API_URL}/api/photos/${eventId}/${photoId}`, {
      credentials: "include",
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Failed to fetch photo details")
    }

    const data = await response.json()
    return data.data
  },

  async getMyPhotos(eventId: string): Promise<{ data: PhotoData[]; prompt?: string; face_profile_id?: string }> {
    const response = await fetch(`${API_URL}/api/events/${eventId}/photos/mine`, {
      credentials: "include",
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Failed to fetch your photos")
    }

    return await response.json()
  },

  async uploadPhotos(
    eventId: string,
    files: File[],
    onFileComplete?: (fileIndex: number, photo: PhotoData) => void,
    onFileError?: (fileIndex: number, error: Error) => void
  ): Promise<UploadResponse> {
    const results: PhotoData[] = []
    const errors: Array<{ index: number; error: Error }> = []

    // Upload files one by one to track individual progress
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const formData = new FormData()
      formData.append('photos', file)

      try {
        const response = await fetch(`${API_URL}/api/photos/${eventId}/upload`, {
          method: 'POST',
          body: formData,
          credentials: 'include',
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || 'Failed to upload photo')
        }

        const data = await response.json()
        const photo = data.photos?.[0]

        if (photo) {
          results.push(photo)
          onFileComplete?.(i, photo)
        }
      } catch (error) {
        const err = error instanceof Error ? error : new Error('Failed to upload photo')
        errors.push({ index: i, error: err })
        onFileError?.(i, err)
      }
    }

    if (results.length === 0 && errors.length > 0) {
      throw errors[0].error
    }

    return {
      message: `${results.length} photo(s) uploaded successfully`,
      photos: results,
    }
  },

  async deletePhoto(eventId: string, photoId: string): Promise<void> {
    const response = await fetch(`${API_URL}/api/photos/${eventId}/${photoId}`, {
      method: "DELETE",
      credentials: "include",
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Failed to delete photo")
    }
  },
}
