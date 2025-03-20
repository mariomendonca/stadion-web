import { useState } from 'react'
import { ForgotPasswordPresentation } from './ForgotPasswordPresentation'
import { ForgotPasswordFormData } from './schema'

export function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(data: ForgotPasswordFormData) {
    try {
      setIsLoading(true)
      // TODO: Implement forgot password service
      console.log('Form data:', data)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ForgotPasswordPresentation
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  )
}