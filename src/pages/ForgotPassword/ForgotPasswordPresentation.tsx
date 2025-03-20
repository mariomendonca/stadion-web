import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ForgotPasswordFormData, forgotPasswordSchema } from './schema'

interface ForgotPasswordPresentationProps {
  isLoading: boolean
  onSubmit: (data: ForgotPasswordFormData) => void
}

export function ForgotPasswordPresentation({
  isLoading,
  onSubmit
}: ForgotPasswordPresentationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ''
    }
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto space-y-4">
      <div className='flex justify-between items-center'>
        <Link to='/login'>
          <ArrowLeft />
        </Link>
        <h1 className='text-xl text-center font-semibold'>Recuperação de senha</h1>
        <ArrowLeft color='transparent' />
      </div>

      <p className='text-base text-slate-700 font-medium text-center'>
        Enviaremos um link para seu email para você seguir com a recuperação da senha
      </p>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          {...register('email')}
          type="email"
          id="email"
          placeholder="Enter your email"
          disabled={isLoading}
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>

      <Button
        type="submit"
        className='w-full'
        disabled={isLoading}
      >
        {isLoading ? 'Carregando...' : 'Enviar link'}
      </Button>
    </form>
  )
} 