import { Event } from './types'
import { EventCard } from './components/EventCard'

interface HomePresentationProps {
  events: Event[]
  isLoading: boolean
}

export function HomePresentation({ events, isLoading }: HomePresentationProps) {
  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="w-full h-48 bg-gray-200 rounded-t-lg" />
              <div className="p-4 space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-4 bg-gray-200 rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (events.length === 0) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Nenhum evento encontrado</h2>
          <p className="text-gray-500 mt-2">Não há eventos disponíveis no momento.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
} 