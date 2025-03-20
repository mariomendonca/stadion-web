import { useState, useEffect } from 'react'
import { HomePresentation } from './HomePresentation'
import { Event } from './types'

export function Home() {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadEvents() {
      try {
        setIsLoading(true)
        // TODO: Implement events service
        // This is mock data for now
        const mockEvents: Event[] = [
          {
            id: "76772770-a820-4cac-935f-0a7a125dd6dd",
            name: "Final Match",
            description: "The final match of the local football championship",
            imageUrl: null,
            redirectUrl: "https://example.com/register",
            country: "BR",
            state: "PE",
            city: "Rio de Janeiro",
            address: "Rua das Flores, 123",
            category: "RUNNING",
            startDate: "2024-10-01T18:00:00",
            endDate: "2024-10-10T20:00:00",
            createdAt: "2025-03-19T19:12:43.720161"
          },
          {
            id: "76772770-a820-4cac-935f-0a7a125dd6dd",
            name: "Final Match",
            description: "The final match of the local football championship",
            imageUrl: null,
            redirectUrl: "https://example.com/register",
            country: "BR",
            state: "PE",
            city: "Rio de Janeiro",
            address: "Rua das Flores, 123",
            category: "RUNNING",
            startDate: "2024-10-01T18:00:00",
            endDate: "2024-10-10T20:00:00",
            createdAt: "2025-03-19T19:12:43.720161"
          },
          {
            id: "76772770-a820-4cac-935f-0a7a125dd6dd",
            name: "Final Match",
            description: "The final match of the local football championship",
            imageUrl: null,
            redirectUrl: "https://example.com/register",
            country: "BR",
            state: "PE",
            city: "Rio de Janeiro",
            address: "Rua das Flores, 123",
            category: "RUNNING",
            startDate: "2024-10-01T18:00:00",
            endDate: "2024-10-10T20:00:00",
            createdAt: "2025-03-19T19:12:43.720161"
          },
          {
            id: "76772770-a820-4cac-935f-0a7a125dd6dd",
            name: "Final Match",
            description: "The final match of the local football championship",
            imageUrl: null,
            redirectUrl: "https://example.com/register",
            country: "BR",
            state: "PE",
            city: "Rio de Janeiro",
            address: "Rua das Flores, 123",
            category: "RUNNING",
            startDate: "2024-10-01T18:00:00",
            endDate: "2024-10-10T20:00:00",
            createdAt: "2025-03-19T19:12:43.720161"
          },
        ]
        setEvents(mockEvents)
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