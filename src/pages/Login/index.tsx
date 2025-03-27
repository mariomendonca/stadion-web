import { useState } from 'react'
import { login } from '@/services/userService'
import { LoginPresentation } from './LoginPresentation'
import { LoginFormData } from './schema'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@/contexts/UserContext'

export function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { setUser } = useUser()

  async function handleSubmit(data: LoginFormData) {
    try {
      setIsLoading(true)
      const user = await login(data.email, data.password)
      setUser(user)
      navigate('/')
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