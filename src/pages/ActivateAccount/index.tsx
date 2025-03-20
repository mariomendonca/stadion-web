import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ActivateAccountPresentation } from './ActivateAccountPresentation'
import { activateAccount } from '@/services/userService'

export function ActivateAccount() {
  const { id } = useParams<{ id: string }>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const onActivateAccount = async () => {
    try {
      setIsLoading(true)
      setError(null)
      setSuccess(false)

      const result = await activateAccount(id!)
      console.log('result', result)

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao ativar conta')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      onActivateAccount()
    } else {
      setError('ID de ativação inválido')
      setIsLoading(false)
    }
  }, [id])

  return (
    <ActivateAccountPresentation
      isLoading={isLoading}
      error={error}
      success={success}
      onRetry={onActivateAccount}
    />
  )
} 