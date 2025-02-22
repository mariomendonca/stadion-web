import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import LogoImg from '../../assets/logo-transparent.png'
import { Link } from 'react-router-dom'
import { login } from '@/services/userService'

export function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    try {
      setIsLoading(true)
      const result = await login(email, password)
      console.log('result', result)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <img src={LogoImg} alt='Stadion Logo' className='h-40 w-40 mx-auto' />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email or username</Label>
        <Input onChange={e => setEmail(e.target.value)} type="email" id="email" placeholder="Enter your email or username" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
        <Label htmlFor="password">Password</Label>
        <div className='flex justify-between'>
          <Input onChange={e => setPassword(e.target.value)} className='w-11/12' type={showPassword ? "text" : "password"} id="password" placeholder="Enter your secure password" />
          <Button variant="ghost" onClick={() => setShowPassword(prevState => !prevState)}>{!showPassword ? <Eye /> : <EyeOff />}</Button>
        </div>
        <div>
          <Link to='/forgot-password' className='text-sm text-slate-700 underline mt-1 inline'>Esqueci a senha</Link>
        </div>
      </div>

      <Button disabled={isLoading} onClick={handleLogin} className='w-full mt-6'>{isLoading ? 'carregando...' : 'Login'}</Button>
      <p className='text-center text-sm'>É novo por aqui?{' '}<Link to='/register' className='text-slate-700 underline'>Criar conta.</Link></p>
    </>
  )
}