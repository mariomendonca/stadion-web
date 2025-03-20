import { z } from 'zod'

const today = new Date()
today.setHours(0, 0, 0, 0) // Reset time part to compare only dates

export const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  username: z.string()
    .min(1, 'Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers and underscores'),
  bornDate: z.string()
    .min(1, 'Birth date is required')
    .refine((date) => {
      const selectedDate = new Date(date)
      selectedDate.setHours(0, 0, 0, 0) // Reset time part to compare only dates
      return selectedDate <= today
    }, 'Birth date cannot be in the future')
    .refine((date) => {
      const selectedDate = new Date(date)
      const minDate = new Date()
      minDate.setFullYear(minDate.getFullYear() - 120) // Reasonable maximum age
      return selectedDate >= minDate
    }, 'Please enter a valid birth date'),
  email: z.string()
    .min(1, 'Email is required')
    .email('Invalid email format'),
  password: z.string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
    .min(1, 'Password confirmation is required')
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export type RegisterFormData = z.infer<typeof registerSchema>