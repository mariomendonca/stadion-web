import { useState } from 'react'
import { login } from '@/services/userService'
import { LoginPresentation } from './LoginPresentation'
import { LoginFormData } from './schema'

export function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(data: LoginFormData) {
    try {
      setIsLoading(true)
      const result = await login(data.email, data.password)
      console.log('result', result)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <LoginPresentation
      showPassword={showPassword}
      isLoading={isLoading}
      onTogglePassword={() => setShowPassword(prev => !prev)}
      onSubmit={handleSubmit}
    />
  )
}