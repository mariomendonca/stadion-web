import { api } from './api'

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/v1/users/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};