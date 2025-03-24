import { Event, EventFilters } from './types'
import { EventFilters as EventFiltersComponent } from './components/EventFilters'
import { EventList } from './components/EventList'
import { memo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { SlidersHorizontal } from 'lucide-react'

interface HomePresentationProps {
  events: Event[]
  isLoading: boolean
  filters: EventFilters
  availableStates: string[]
  onFilterChange: (filters: EventFilters) => void
  defaultFilters: EventFilters
  hasMore: boolean
  onLoadMore: () => void
}

const MemoizedEventFilters = memo(EventFiltersComponent)

export const HomePresentation = memo(function HomePresentation({
  events,
  isLoading,
  filters,
  availableStates,
  onFilterChange,
  defaultFilters,
  hasMore,
  onLoadMore
}: HomePresentationProps) {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-end mb-4 lg:hidden">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <SlidersHorizontal className="h-4 w-4" />
          {showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <MemoizedEventFilters
            filters={filters}
            onFilterChange={onFilterChange}
            availableStates={availableStates}
            defaultFilters={defaultFilters}
          />
        </div>
        <div className="lg:col-span-3">
          <EventList events={events} isLoading={isLoading} />
          {hasMore && (
            <div className="flex justify-center mt-8">
              <Button
                onClick={onLoadMore}
                disabled={isLoading}
                variant="outline"
                className="min-w-[200px]"
              >
                {isLoading ? 'Carregando...' : 'Carregar mais'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}) 