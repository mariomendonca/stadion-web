import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import LogoImg from '@/assets/logo-transparent.png'

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
      <div className="w-full max-w-sm mx-auto space-y-4">
        <img src={LogoImg} alt='Stadion Logo' className='h-40 w-40 mx-auto' />
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">Ativando sua conta</h1>
          <p className="text-sm text-slate-600">
            Por favor, aguarde enquanto ativamos sua conta...
          </p>
        </div>
        <div className="flex justify-center py-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full max-w-sm mx-auto space-y-4">
        <img src={LogoImg} alt='Stadion Logo' className='h-40 w-40 mx-auto' />
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">Erro ao ativar conta</h1>
          <p className="text-sm text-red-500">
            {error}
          </p>
        </div>
        <div className="space-y-2">
          <Button onClick={onRetry} className="w-full">
            Tentar novamente
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate('/auth/login')}
            className="w-full"
          >
            Voltar para o login
          </Button>
        </div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="w-full max-w-sm mx-auto space-y-4">
        <img src={LogoImg} alt='Stadion Logo' className='h-40 w-40 mx-auto' />
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">Conta ativada com sucesso!</h1>
          <p className="text-sm text-slate-600">
            Sua conta foi ativada com sucesso. Você já pode fazer login.
          </p>
        </div>
        <Button onClick={() => navigate('/auth/login')} className="w-full">
          Ir para o login
        </Button>
      </div>
    )
  }

  return null
} 