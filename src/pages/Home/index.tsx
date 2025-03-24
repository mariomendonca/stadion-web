import { useState, useEffect } from 'react'
import { HomePresentation } from './HomePresentation'
import { Event, EventFilters } from './types'
import { getEvents } from '@/services/eventsService'
import { STATE_ABBREVIATIONS } from '@/utils/states'

const DEFAULT_FILTERS: EventFilters = {
  states: [],
  categories: [],
  name: '',
  startDate: null,
  endDate: null,
  page: 1,
  itemsPerPage: 18
}

export function Home() {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true)
  const [filters, setFilters] = useState<EventFilters>(DEFAULT_FILTERS)

  useEffect(() => {
    loadEvents(true)
  }, [filters.states, filters.categories, filters.name, filters.startDate, filters.endDate])

  const loadEvents = async (resetEvents = false) => {
    try {
      setIsLoading(true)
      const currentPage = resetEvents ? 0 : filters.page
      const result = await getEvents({
        ...filters,
        page: currentPage
      })
      
      if (resetEvents) {
        setEvents(result)
      } else {
        setEvents(prev => [...prev, ...result])
      }
      
      // If we received less items than requested, we've reached the end
      setHasMore(result.length === filters.itemsPerPage)
    } catch (error) {
      console.error('Error loading events:', error)
      // TODO: Implement error handling
    } finally {
      setIsLoading(false)
    }
  }

  const handleFilterChange = (newFilters: EventFilters) => {
    setFilters(newFilters)
  }

  const handleLoadMore = () => {
    setFilters(prev => ({ ...prev, page: prev.page + 1 }))
    loadEvents(false)
  }

  return (
    <HomePresentation
      events={events}
      isLoading={isLoading}
      filters={filters}
      availableStates={STATE_ABBREVIATIONS}
      onFilterChange={handleFilterChange}
      defaultFilters={DEFAULT_FILTERS}
      hasMore={hasMore}
      onLoadMore={handleLoadMore}
    />
  )
}
