import { useNavigate } from 'react-router'
import { format } from 'date-fns'
import { Badge } from '../../../components/ui/badge'
import { Users, MapPin } from '@phosphor-icons/react'
import { EventData } from '../../../features/events/services/events.api'

interface EventCardProps {
  event: EventData
}

// Color themes for different gradients
const gradientThemes = [
  // Ocean Blue
  {
    bg: 'from-blue-700 via-blue-500 to-cyan-400',
    wave1: ['#1e3a8a', '#3b82f6'],
    wave2: ['#0891b2', '#22d3ee', '#67e8f9'],
  },
  // Sunset Orange
  {
    bg: 'from-orange-700 via-orange-500 to-amber-400',
    wave1: ['#c2410c', '#f97316'],
    wave2: ['#d97706', '#fbbf24', '#fcd34d'],
  },
  // Purple Dream
  {
    bg: 'from-purple-700 via-purple-500 to-pink-400',
    wave1: ['#6b21a8', '#a855f7'],
    wave2: ['#be185d', '#ec4899', '#f9a8d4'],
  },
  // Forest Green
  {
    bg: 'from-emerald-700 via-emerald-500 to-teal-400',
    wave1: ['#047857', '#10b981'],
    wave2: ['#0d9488', '#14b8a6', '#5eead4'],
  },
  // Rose Red
  {
    bg: 'from-rose-700 via-rose-500 to-red-400',
    wave1: ['#be123c', '#fb7185'],
    wave2: ['#dc2626', '#f87171', '#fca5a5'],
  },
  // Indigo Night
  {
    bg: 'from-indigo-700 via-indigo-500 to-violet-400',
    wave1: ['#3730a3', '#6366f1'],
    wave2: ['#7c3aed', '#8b5cf6', '#c4b5fd'],
  },
  // Golden Hour
  {
    bg: 'from-amber-700 via-yellow-500 to-lime-400',
    wave1: ['#b45309', '#eab308'],
    wave2: ['#ca8a04', '#facc15', '#bef264'],
  },
  // Tropical Teal
  {
    bg: 'from-teal-700 via-cyan-500 to-sky-400',
    wave1: ['#115e59', '#06b6d4'],
    wave2: ['#0284c7', '#38bdf8', '#7dd3fc'],
  },
]

// Get theme based on event ID (deterministic)
const getThemeForEvent = (eventId: string) => {
  let hash = 0
  for (let i = 0; i < eventId.length; i++) {
    const char = eventId.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  const index = Math.abs(hash) % gradientThemes.length
  return gradientThemes[index]
}

export const EventCard = ({ event }: EventCardProps) => {
  const navigate = useNavigate()

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM dd, yyyy')
  }

  const theme = getThemeForEvent(event.id)

  return (
    <div 
      onClick={() => navigate(`/events/${event.id}`)}
      className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
    >
      {/* Gradient Top Half */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.bg}`}>
          <svg
            viewBox="0 0 400 200"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`wave1-${event.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={theme.wave1[0]} stopOpacity="0.8" />
                <stop offset="100%" stopColor={theme.wave1[1]} stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id={`wave2-${event.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={theme.wave2[0]} stopOpacity="0.6" />
                <stop offset="50%" stopColor={theme.wave2[1]} stopOpacity="0.5" />
                <stop offset="100%" stopColor={theme.wave2[2]} stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M0,100 Q100,50 200,100 T400,80 L400,0 L0,0 Z"
              fill={`url(#wave1-${event.id})`}
            />
            <path
              d="M0,120 Q150,80 250,130 T400,100 L400,200 L0,200 Z"
              fill={`url(#wave2-${event.id})`}
            />
          </svg>
        </div>
        
        {/* User Role Badge */}
        <Badge className="absolute bottom-4 left-4 bg-white/90 text-neutral-800 hover:bg-white/90 font-medium">
          {event.user_role === 'ORGANIZER' ? 'Organizer' : 'Attendee'}
        </Badge>

        {/* Status Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 dark:bg-neutral-800/90 rounded-full px-3 py-1">
          <div className={`w-2 h-2 rounded-full ${event.is_active ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className={`text-xs font-medium ${event.is_active ? 'text-green-700' : 'text-red-700'}`}>
            {event.is_active ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>

      {/* Bottom Half */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          {event.name}
        </h2>
        
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-2">
          Join us for an amazing time at {event.location}. Create memories and share moments together.
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400">
              <MapPin size={16} weight="fill" />
              <span className="text-sm">{event.location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400">
              <Users size={16} weight="fill" />
              <span className="text-sm">{event._count?.event_access || 0} attending</span>
            </div>
          </div>
          <span className="text-sm text-neutral-500">
            {formatDate(event.date)}
          </span>
        </div>
      </div>
    </div>
  )
}
