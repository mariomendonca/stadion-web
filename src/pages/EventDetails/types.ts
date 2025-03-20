import { Event } from '@/pages/Home/types'

export interface EventDetailsProps {
  event: Event
  isLoading: boolean
  error: string | null
} 