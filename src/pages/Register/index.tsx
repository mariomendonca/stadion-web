import { useState } from 'react'
import { RegisterPresentation } from './RegisterPresentation'
import { RegisterFormData } from './schema'
import { register } from '@/services/userService'

export function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(data: RegisterFormData) {
    try {
      setIsLoading(true)
      const response = await register(data)
      console.log('response', response)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <RegisterPresentation
      isLoading={isLoading}
      showPassword={showPassword}
      showConfirmPassword={showConfirmPassword}
      onTogglePassword={() => setShowPassword(prev => !prev)}
      onToggleConfirmPassword={() => setShowConfirmPassword(prev => !prev)}
      onSubmit={handleSubmit}
    />
  )
}