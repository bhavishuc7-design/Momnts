import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../../components/ui/dialog'
import { 
  ArrowLeft, 
  Upload, 
  Images, 
  User, 
  CloudArrowUp, 
  X,
  Crown,
  Calendar,
  MapPin,
  Users,
  Link as LinkIcon,
  Check
} from '@phosphor-icons/react'
import { eventsApi, EventData } from '../../features/events/services/events.api'
import { photosApi, PhotoData } from '../../features/events/services/photos.api'
import { toast } from 'sonner'
import { format } from 'date-fns'

type TabType = 'all' | 'your-photos' | 'your-uploads'

const EventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>()
  const navigate = useNavigate()
  
  const [activeTab, setActiveTab] = useState<TabType>('all')
  const [event, setEvent] = useState<EventData | null>(null)
  const [photos, setPhotos] = useState<PhotoData[]>([])
  const [loading, setLoading] = useState(true)
  const [uploadModalOpen, setUploadModalOpen] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [inviteCodeCopied, setInviteCodeCopied] = useState(false)

  const fetchEventDetails = useCallback(async () => {
    if (!eventId) return
    try {
      const eventData = await eventsApi.getEventDetails(eventId)
      setEvent(eventData)
    } catch (error) {
      console.error('Failed to fetch event details:', error)
      toast.error('Failed to load event details')
    }
  }, [eventId])

  const fetchPhotos = useCallback(async () => {
    if (!eventId) return
    try {
      setLoading(true)
      const photosData = await photosApi.getEventPhotos(eventId)
      setPhotos(photosData)
    } catch (error) {
      console.error('Failed to fetch photos:', error)
      toast.error('Failed to load photos')
    } finally {
      setLoading(false)
    }
  }, [eventId])

  useEffect(() => {
    fetchEventDetails()
    fetchPhotos()
  }, [fetchEventDetails, fetchPhotos])

  const filteredPhotos = photos.filter((photo) => {
    switch (activeTab) {
      case 'your-uploads':
        return photo.user_id === event?.user_id || photo.user?.id === event?.user_id
      case 'your-photos':
        // For now, return all - face matching to be implemented
        return true
      case 'all':
      default:
        return true
    }
  })

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      setSelectedFiles(files)
    }
  }

  const handleUpload = async () => {
    if (!eventId || selectedFiles.length === 0) return
    
    try {
      setUploading(true)
      await photosApi.uploadPhotos(eventId, selectedFiles)
      toast.success(`${selectedFiles.length} photo(s) uploaded successfully!`)
      setUploadModalOpen(false)
      setSelectedFiles([])
      fetchPhotos()
    } catch (error) {
      console.error('Failed to upload photos:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to upload photos')
    } finally {
      setUploading(false)
    }
  }

  const handleCopyInviteCode = () => {
    if (event?.invite_code) {
      navigator.clipboard.writeText(event.invite_code)
      setInviteCodeCopied(true)
      setTimeout(() => setInviteCodeCopied(false), 2000)
      toast.success('Invite code copied!')
    }
  }

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy')
  }

  // Pinterest-style masonry layout with 3 columns
  const getColumnPhotos = (columnIndex: number) => {
    return filteredPhotos.filter((_, index) => index % 3 === columnIndex)
  }

  if (!event && !loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-neutral-500">Event not found</p>
        <Button onClick={() => navigate('/events')}>
          <ArrowLeft size={16} className="mr-2" />
          Back to Events
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Back + Event Info */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate('/events')}>
                <ArrowLeft size={20} weight="bold" />
              </Button>
              
              <div>
                <h1 className="text-xl font-bold">{event?.name || 'Loading...'}</h1>
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <MapPin size={14} />
                  <span>{event?.location}</span>
                  <span>•</span>
                  <Calendar size={14} />
                  <span>{event?.date ? formatDate(event.date) : ''}</span>
                </div>
              </div>

              {/* Invite Code Badge for Organizer */}
              {event?.user_role === 'ORGANIZER' && (
                <Badge 
                  variant="outline" 
                  className="cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  onClick={handleCopyInviteCode}
                >
                  <LinkIcon size={12} className="mr-1" />
                  {inviteCodeCopied ? <Check size={12} /> : event?.invite_code}
                </Badge>
              )}
            </div>

            {/* Right: Upload Button */}
            <Button onClick={() => setUploadModalOpen(true)}>
              <Upload size={16} weight="bold" className="mr-2" />
              Upload Photos
            </Button>
          </div>

          {/* Tabs Navigation */}
          <div className="mt-4">
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as TabType)}>
              <TabsList className="bg-neutral-100 dark:bg-neutral-800">
                <TabsTrigger value="all" className="flex items-center gap-2">
                  <Images size={16} />
                  All Photos ({photos.length})
                </TabsTrigger>
                <TabsTrigger value="your-photos" className="flex items-center gap-2">
                  <User size={16} />
                  Your Photos
                </TabsTrigger>
                <TabsTrigger value="your-uploads" className="flex items-center gap-2">
                  <CloudArrowUp size={16} />
                  Your Uploads
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Photo Grid - Pinterest Style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {loading ? (
          <div className="flex justify-center py-12">
            <p className="text-neutral-500">Loading photos...</p>
          </div>
        ) : filteredPhotos.length === 0 ? (
          <div className="text-center py-12">
            <Images size={48} className="mx-auto text-neutral-300 mb-4" />
            <p className="text-neutral-500">
              {activeTab === 'all' 
                ? 'No photos yet. Be the first to upload!' 
                : activeTab === 'your-uploads'
                ? "You haven't uploaded any photos yet."
                : "No photos matched with your face yet."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              {getColumnPhotos(0).map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              {getColumnPhotos(1).map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              {getColumnPhotos(2).map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      <Dialog open={uploadModalOpen} onOpenChange={setUploadModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Upload Photos</DialogTitle>
            <DialogDescription>
              Select photos to upload to this event. Face detection will run automatically.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              id="photo-upload"
            />
            <label htmlFor="photo-upload">
              <div className="border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-8 text-center cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                <CloudArrowUp size={48} className="mx-auto text-neutral-400 mb-4" />
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {selectedFiles.length > 0 
                    ? `${selectedFiles.length} file(s) selected` 
                    : 'Click to select photos or drag and drop'}
                </p>
              </div>
            </label>
            
            {selectedFiles.length > 0 && (
              <div className="mt-4 max-h-32 overflow-y-auto">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between py-2 text-sm">
                    <span className="truncate">{file.name}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6"
                      onClick={() => setSelectedFiles(prev => prev.filter((_, i) => i !== index))}
                    >
                      <X size={14} />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => {
              setUploadModalOpen(false)
              setSelectedFiles([])
            }}>
              Cancel
            </Button>
            <Button 
              onClick={handleUpload} 
              disabled={selectedFiles.length === 0 || uploading}
            >
              {uploading ? 'Uploading...' : `Upload ${selectedFiles.length || ''} Photo(s)`}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Photo Card Component
const PhotoCard = ({ photo }: { photo: PhotoData }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="relative group overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
      <img
        src={photo.display_url}
        alt="Event photo"
        className={`w-full h-auto transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}
      />
      
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-neutral-300 border-t-neutral-600 rounded-full animate-spin" />
        </div>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-white text-sm font-medium truncate">
            {photo.user?.name || 'Unknown'}
          </p>
          {photo._count?.photo_faces > 0 && (
            <p className="text-white/70 text-xs">
              {photo._count.photo_faces} face{photo._count.photo_faces > 1 ? 's' : ''} detected
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventDetails
