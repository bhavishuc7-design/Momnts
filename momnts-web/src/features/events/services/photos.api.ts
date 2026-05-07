const API_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000"

export interface PhotoData {
  id: string
  event_id: string
  user_id: string
  thumb_url: string
  display_url: string
  original_url: string
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

  async uploadPhotos(eventId: string, files: File[]): Promise<UploadResponse> {
    const formData = new FormData()
    files.forEach((file) => {
      formData.append('photos', file)
    })

    const response = await fetch(`${API_URL}/api/photos/${eventId}/upload`, {
      method: "POST",
      body: formData,
      credentials: "include",
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Failed to upload photos")
    }

    return response.json()
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
