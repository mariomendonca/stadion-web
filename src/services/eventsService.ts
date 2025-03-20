import { Event, EventFilters } from '@/pages/Home/types'
import { api } from './api'

export async function getEvents(filters: EventFilters): Promise<Event[]> {
  try {
    const queryParams = buildQueryParams(filters)

    const response = await api.get(`/v1/events?${queryParams}`)
    return response.data
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}

const buildQueryParams = (filters: EventFilters): string => {
  const queryParams = new URLSearchParams()
    
    // Add arrays as multiple parameters with the same name
    filters.states.forEach(state => {
      queryParams.append('states', state)
    })
    
    filters.categories.forEach(category => {
      queryParams.append('categories', category)
    })
    
    // Add single value parameters
    if (filters.name) {
      queryParams.append('name', filters.name)
    }
    
    if (filters.startDate) {
      queryParams.append('startDate', filters.startDate)
    }
    
    if (filters.endDate) {
      queryParams.append('endDate', filters.endDate)
    }
    
    // Add pagination parameters
    queryParams.append('page', filters.page.toString())
    queryParams.append('itemsPerPage', filters.itemsPerPage.toString())

  return queryParams.toString()
}

export async function getEventById(id: string): Promise<Event> {
  try {
    const response = await api.get(`/v1/events/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching event by id:', error)
    throw error
  }
}
