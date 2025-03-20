import { RegisterFormData } from '@/pages/Register/schema'
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

export const register = async (data: RegisterFormData) => {
  try {
    const response = await api.post('/v1/users', data);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

export const activateAccount = async (id: string) => {
  try {
    const response = await api.patch(`/v1/users/${id}/active`);
    return response.data;
  } catch (error) {
    console.error('Error activating account:', error);
    throw error;
  }
}
