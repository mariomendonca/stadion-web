import { EventDetailsProps } from './types'
import { Button } from '@/components/ui/button'
import { CalendarDays, MapPin, Loader2, ArrowLeft } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Badge } from '@/components/ui/badge'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

export const EventDetailsPresentation = memo(function EventDetailsPresentation({
  event,
  isLoading,
  error
}: EventDetailsProps) {
  const navigate = useNavigate()

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>

        {event.imageUrl && (
          <div className="w-full h-[400px] overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
            <img
              src={event.imageUrl}
              alt={event.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="mt-8 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold">{event.name}</h1>
              <p className="mt-2 text-muted-foreground">{event.description}</p>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-1">
              {event.category}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Data e Horário</h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="h-5 w-5" />
                <span>
                  {format(new Date(event.startDate), "dd 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR })}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Localização</h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>
                  {event.address}, {event.city} - {event.state}, {event.country}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <Button asChild size="lg" className="w-full md:w-auto">
              <a href={event.redirectUrl} target="_blank" rel="noopener noreferrer">
                Inscrever-se
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}) 