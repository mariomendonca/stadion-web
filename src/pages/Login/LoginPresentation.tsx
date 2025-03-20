import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/logo-transparent.png'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormData, loginSchema } from './schema'

interface LoginPresentationProps {
  showPassword: boolean
  isLoading: boolean
  onTogglePassword: () => void
  onSubmit: (data: LoginFormData) => void
}

export function LoginPresentation({
  showPassword,
  isLoading,
  onTogglePassword,
  onSubmit
}: LoginPresentationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto space-y-4">
      <img src={LogoImg} alt='Stadion Logo' className='h-40 w-40 mx-auto' />

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          {...register('email')}
          type="text"
          id="email"
          placeholder="Enter your email"
          disabled={isLoading}
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className='flex gap-2'>
          <Input
            {...register('password')}
            className='flex-1'
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            disabled={isLoading}
          />
          <Button
            type="button"
            variant="ghost"
            onClick={onTogglePassword}
            disabled={isLoading}
          >
            {!showPassword ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
          </Button>
        </div>
        {errors.password && (
          <span className="text-sm text-red-500">{errors.password.message}</span>
        )}
        <div>
          <Link
            to='/forgot-password'
            className='text-sm text-slate-700 hover:text-slate-900 underline'
          >
            Esqueci a senha
          </Link>
        </div>
      </div>

      <Button
        type="submit"
        className='w-full'
        disabled={isLoading}
      >
        {isLoading ? 'carregando...' : 'Login'}
      </Button>

      <p className='text-center text-sm'>
        É novo por aqui?{' '}
        <Link to='/register' className='text-slate-700 hover:text-slate-900 underline'>
          Criar conta.
        </Link>
      </p>
    </form>
  )
} 