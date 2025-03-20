import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { EventDetailsPresentation } from './EventDetailsPresentation'
import { Event } from '@/pages/Home/types'
import { getEventById } from '@/services/eventsService'

export function EventDetails() {
  const { id } = useParams<{ id: string }>()
  const [event, setEvent] = useState<Event | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadEvent()
  }, [id])

  const loadEvent = async () => {
    if (!id) {
      setError('ID do evento não encontrado')
      setIsLoading(false)
      return
    }

    try {
      setIsLoading(true)
      setError(null)
      const result = await getEventById(id)
      setEvent(result)
    } catch (error) {
      console.error('Error loading event:', error)
      setError('Erro ao carregar o evento. Por favor, tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!event) {
    return (
      <EventDetailsPresentation
        event={{} as Event}
        isLoading={isLoading}
        error={error}
      />
    )
  }

  return (
    <EventDetailsPresentation
      event={event}
      isLoading={isLoading}
      error={error}
    />
  )
} 