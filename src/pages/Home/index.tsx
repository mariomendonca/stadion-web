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
  page: 0,
  itemsPerPage: 12
}

export function Home() {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState<EventFilters>(DEFAULT_FILTERS)

  useEffect(() => {
    loadEvents()
  }, [filters])

  const loadEvents = async () => {
    try {
      setIsLoading(true)
      const result = await getEvents(filters)
      setEvents(result)
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

  return (
    <HomePresentation
      events={events}
      isLoading={isLoading}
      filters={filters}
      availableStates={STATE_ABBREVIATIONS}
      onFilterChange={handleFilterChange}
    />
  )
}
