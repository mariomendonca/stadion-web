import { Loader2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

interface ActivateAccountPresentationProps {
  isLoading: boolean
  error: string | null
  success: boolean
  onRetry: () => void
}

export function ActivateAccountPresentation({
  isLoading,
  error,
  success,
  onRetry,
}: ActivateAccountPresentationProps) {
  const navigate = useNavigate()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Ativando sua conta</CardTitle>
            <CardDescription>
              Por favor, aguarde enquanto ativamos sua conta...
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Erro ao ativar conta</CardTitle>
            <CardDescription className="text-destructive">
              {error}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button onClick={onRetry}>
              Tentar novamente
            </Button>
            <Button variant="outline" onClick={() => navigate('/auth/login')}>
              Voltar para o login
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (success) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Conta ativada com sucesso!</CardTitle>
            <CardDescription>
              Sua conta foi ativada com sucesso. Você já pode fazer login.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/auth/login')}>
              Ir para o login
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return null
} 