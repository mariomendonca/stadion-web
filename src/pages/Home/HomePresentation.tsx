import { Event, EventFilters } from './types'
import { EventFilters as EventFiltersComponent } from './components/EventFilters'
import { EventList } from './components/EventList'
import { memo } from 'react'

interface HomePresentationProps {
  events: Event[]
  isLoading: boolean
  filters: EventFilters
  availableStates: string[]
  onFilterChange: (filters: EventFilters) => void
  defaultFilters: EventFilters
}

const MemoizedEventFilters = memo(EventFiltersComponent)

export const HomePresentation = memo(function HomePresentation({
  events,
  isLoading,
  filters,
  availableStates,
  onFilterChange,
  defaultFilters,
}: HomePresentationProps) {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <MemoizedEventFilters
            filters={filters}
            onFilterChange={onFilterChange}
            availableStates={availableStates}
            defaultFilters={defaultFilters}
          />
        </div>
        <div className="lg:col-span-3">
          <EventList events={events} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}) 