import { api } from './api'

export const getEvents = async () => {
  try {
    const response = await api.get('/v1/events')
    return response.data
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}