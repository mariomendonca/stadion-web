import { Event } from '../types'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CalendarDays, MapPin } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Badge } from '@/components/ui/badge'
import { DefaultEventImage } from '@/assets/default-event'
import { Link } from 'react-router-dom'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="w-full overflow-hidden group">
      <div className="w-full h-48 overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600">
        <img
          src={event.imageUrl || DefaultEventImage}
          alt={event.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          onError={(e) => {
            e.currentTarget.src = DefaultEventImage
            e.currentTarget.onerror = null // Prevent infinite loop if default image also fails
          }}
        />
      </div>

      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl line-clamp-1">{event.name}</CardTitle>
            <CardDescription className="mt-2 line-clamp-2">{event.description}</CardDescription>
          </div>
          <Badge variant="outline" className="shrink-0">{event.category}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4 shrink-0" />
          <span>
            {format(new Date(event.startDate), "dd 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR })}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0" />
          <span className="line-clamp-1">
            {event.address}, {event.city} - {event.state}, {event.country}
          </span>
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/event/${event.id}`}>
            Ver detalhes
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
} 