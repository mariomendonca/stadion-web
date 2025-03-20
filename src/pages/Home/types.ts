export type EventCategory = 'TENNIS' | 'FOOTBALL' | 'BASKETBALL' | 'VOLLEYBALL' | 'RUNNING'

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

export interface EventFilters {
  states: string[]
  categories: EventCategory[]
  name: string
  startDate: string | null
  endDate: string | null
  page: number
  itemsPerPage: number
}