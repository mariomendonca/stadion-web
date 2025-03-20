import { useState, useEffect } from 'react'
import { HomePresentation } from './HomePresentation'
import { Event } from './types'
import { getEvents } from '@/services/eventsService'

export function Home() {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadEvents() {
      try {
        setIsLoading(true)
        const result = await getEvents()
        setEvents(result)
      } catch (error) {
        console.error('Error loading events:', error)
        // TODO: Implement error handling
      } finally {
        setIsLoading(false)
      }
    }

    loadEvents()
  }, [])

  return (
    <HomePresentation
      events={events}
      isLoading={isLoading}
    />
  )
} 