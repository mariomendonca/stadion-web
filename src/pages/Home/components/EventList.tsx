import { Event } from '../types'
import { EventCard } from './EventCard'
import { memo } from 'react'

interface EventListProps {
  events: Event[]
  isLoading: boolean
}

export const EventList = memo(function EventList({ events, isLoading }: EventListProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="h-[400px] bg-slate-200 animate-pulse rounded-lg"
          />
        ))}
      </div>
    )
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">Nenhum evento encontrado</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}) 