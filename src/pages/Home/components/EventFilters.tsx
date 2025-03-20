import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { EventCategory, EventFilters as EventFiltersType } from '../types'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon, Search } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface EventFiltersProps {
  filters: EventFiltersType
  onFilterChange: (filters: EventFiltersType) => void
  availableStates: string[]
}

export function EventFilters({ filters, onFilterChange, availableStates }: EventFiltersProps) {
  const handleNameChange = (value: string) => {
    onFilterChange({ ...filters, name: value })
  }

  const handleCategoryChange = (value: EventCategory) => {
    onFilterChange({
      ...filters,
      categories: filters.categories.includes(value)
        ? filters.categories.filter(cat => cat !== value)
        : [...filters.categories, value]
    })
  }

  const handleStateChange = (value: string) => {
    onFilterChange({
      ...filters,
      states: filters.states.includes(value)
        ? filters.states.filter(state => state !== value)
        : [...filters.states, value]
    })
  }

  const handleDateChange = (date: Date | undefined, type: 'start' | 'end') => {
    onFilterChange({
      ...filters,
      [type === 'start' ? 'startDate' : 'endDate']: date ? format(date, 'yyyy-MM-dd') : null
    })
  }

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <div className="space-y-2">
        <Label htmlFor="search">Buscar por nome</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
          <Input
            id="search"
            placeholder="Digite o nome do evento"
            value={filters.name}
            onChange={(e) => handleNameChange(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Categorias</Label>
        <div className="flex flex-wrap gap-2">
          {['TENNIS', 'FOOTBALL', 'BASKETBALL', 'VOLLEYBALL'].map((category) => (
            <Button
              key={category}
              variant={filters.categories.includes(category as EventCategory) ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange(category as EventCategory)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Estados</Label>
        <Select
          value={filters.states[0]}
          onValueChange={handleStateChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione um estado" />
          </SelectTrigger>
          <SelectContent>
            {availableStates.map((state) => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Data inicial</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {filters.startDate ? (
                  format(new Date(filters.startDate), 'PPP', { locale: ptBR })
                ) : (
                  <span>Selecione uma data</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={filters.startDate ? new Date(filters.startDate) : undefined}
                onSelect={(date) => handleDateChange(date, 'start')}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>Data final</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {filters.endDate ? (
                  format(new Date(filters.endDate), 'PPP', { locale: ptBR })
                ) : (
                  <span>Selecione uma data</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={filters.endDate ? new Date(filters.endDate) : undefined}
                onSelect={(date) => handleDateChange(date, 'end')}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
} 