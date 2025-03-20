export type EventCategory = 'RUNNING' | 'FOOTBALL' | 'BASKETBALL' | 'VOLLEYBALL' | 'OTHER'

export interface Event {
  id: string
  name: string
  description: string
  imageUrl: string | null
  redirectUrl: string
  country: string
  state: string
  city: string
  address: string
  category: EventCategory
  startDate: string
  endDate: string
  createdAt: string
} 