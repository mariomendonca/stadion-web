import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterFormData, registerSchema } from './schema'

interface RegisterPresentationProps {
  isLoading: boolean
  showPassword: boolean
  showConfirmPassword: boolean
  onTogglePassword: () => void
  onToggleConfirmPassword: () => void
  onSubmit: (data: RegisterFormData) => void
}

export function RegisterPresentation({
  isLoading,
  showPassword,
  showConfirmPassword,
  onTogglePassword,
  onToggleConfirmPassword,
  onSubmit
}: RegisterPresentationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      username: '',
      bornDate: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  // Format today's date to YYYY-MM-DD for the max attribute
  const today = new Date().toISOString().split('T')[0]

  // Calculate minimum date (120 years ago)
  const minDate = new Date()
  minDate.setFullYear(minDate.getFullYear() - 120)
  const minDateString = minDate.toISOString().split('T')[0]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto space-y-4">
      <div className='flex justify-between items-center'>
        <Link to='/auth/login'>
          <ArrowLeft />
        </Link>
        <h1 className='text-xl text-center font-semibold'>Crie sua conta</h1>
        <ArrowLeft color='transparent' />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          {...register('name')}
          type="text"
          id="name"
          placeholder="Enter your name"
          disabled={isLoading}
        />
        {errors.name && (
          <span className="text-sm text-red-500">{errors.name.message}</span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          {...register('username')}
          type="text"
          id="username"
          placeholder="Choose a username"
          disabled={isLoading}
        />
        {errors.username && (
          <span className="text-sm text-red-500">{errors.username.message}</span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="bornDate">Data de nascimento</Label>
        <Input
          {...register('bornDate')}
          type="date"
          id="bornDate"
          max={today}
          min={minDateString}
          placeholder="Enter your birth date"
          disabled={isLoading}
        />
        {errors.bornDate && (
          <span className="text-sm text-red-500">{errors.bornDate.message}</span>
        )}
      </div>

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
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm your Password</Label>
        <div className='flex gap-2'>
          <Input
            {...register('confirmPassword')}
            className='flex-1'
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            placeholder="Confirm your password"
            disabled={isLoading}
          />
          <Button
            type="button"
            variant="ghost"
            onClick={onToggleConfirmPassword}
            disabled={isLoading}
          >
            {!showConfirmPassword ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
          </Button>
        </div>
        {errors.confirmPassword && (
          <span className="text-sm text-red-500">{errors.confirmPassword.message}</span>
        )}
      </div>

      <Button
        type="submit"
        className='w-full'
        disabled={isLoading}
      >
        {isLoading ? 'Criando conta...' : 'Criar conta'}
      </Button>
    </form>
  )
} 