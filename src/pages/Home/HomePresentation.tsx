import { Event, EventFilters } from './types'
import { EventCard } from './components/EventCard'
import { EventFilters as EventFiltersComponent } from './components/EventFilters'

interface HomePresentationProps {
  events: Event[]
  isLoading: boolean
  filters: EventFilters
  availableStates: string[]
  onFilterChange: (filters: EventFilters) => void
}

export function HomePresentation({
  events,
  isLoading,
  filters,
  availableStates,
  onFilterChange,
}: HomePresentationProps) {
  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-[400px] bg-slate-200 animate-pulse rounded-lg"
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <EventFiltersComponent
            filters={filters}
            onFilterChange={onFilterChange}
            availableStates={availableStates}
          />
        </div>
        <div className="lg:col-span-3">
          {events.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500">Nenhum evento encontrado</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 