import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { EventCategory, EventFilters as EventFiltersType } from '../types'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon, Search, X } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useCallback, useState, useEffect } from 'react'

interface EventFiltersProps {
  filters: EventFiltersType
  onFilterChange: (filters: EventFiltersType) => void
  availableStates: string[]
  defaultFilters: EventFiltersType
}

export function EventFilters({ filters, onFilterChange, availableStates, defaultFilters }: EventFiltersProps) {
  const [localName, setLocalName] = useState(filters.name)

  // Update local name when filters.name changes externally
  useEffect(() => {
    setLocalName(filters.name)
  }, [filters.name])

  const handleNameChange = useCallback((value: string) => {
    setLocalName(value)
  }, [])

  // Debounced effect to update filters
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localName !== filters.name) {
        onFilterChange({ ...filters, name: localName })
      }
    }, 500) // 500ms delay

    return () => clearTimeout(timer)
  }, [localName, filters, onFilterChange])

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

  const handleClearFilters = () => {
    onFilterChange(defaultFilters)
  }

  const hasActiveFilters = 
    filters.name !== '' ||
    filters.states.length > 0 ||
    filters.categories.length > 0 ||
    filters.startDate !== null ||
    filters.endDate !== null

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Filtros</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFilters}
            className="text-slate-500 hover:text-slate-700"
          >
            <X className="h-4 w-4 mr-2" />
            Limpar filtros
          </Button>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="search">Buscar por nome</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
          <Input
            id="search"
            placeholder="Digite o nome do evento"
            value={localName}
            onChange={(e) => handleNameChange(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Categorias</Label>
        <div className="flex flex-wrap gap-2">
          {['TENNIS', 'FOOTBALL', 'BASKETBALL', 'VOLLEYBALL', 'RUNNING'].map((category) => (
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
          value=""
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
        {filters.states.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {filters.states.map((state) => (
              <div
                key={state}
                className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md text-sm"
              >
                <span>{state}</span>
                <button
                  onClick={() => handleStateChange(state)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Data inicial</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
                <span className="truncate">
                  {filters.startDate ? (
                    format(new Date(filters.startDate + 'T00:00:00'), 'PPP', { locale: ptBR })
                  ) : (
                    <span>Selecione uma data</span>
                  )}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={filters.startDate ? new Date(filters.startDate + 'T00:00:00') : undefined}
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
                <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
                <span className="truncate">
                  {filters.endDate ? (
                    format(new Date(filters.endDate + 'T00:00:00'), 'PPP', { locale: ptBR })
                  ) : (
                    <span>Selecione uma data</span>
                  )}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={filters.endDate ? new Date(filters.endDate + 'T00:00:00') : undefined}
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