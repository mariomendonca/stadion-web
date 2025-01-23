import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit() {
    try {
      console.log(email)

    } catch (error) {
      alert(error)
      setIsLoading(true)
    }
  }

  return (
    <>
      <div className='flex justify-between items-center'>
        <Link to='/login'>
          <ArrowLeft />
        </Link>
        <h1 className='text-xl text-center font-semibold'>Recuperação de senha</h1>
        <ArrowLeft color='transparent' />
      </div>
      <p className='text-base text-slate-700 font-medium text-center mb-3'>Enviaremos um link para seu email para você seguir com a recuperação da senha</p>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input onChange={e => setEmail(e.target.value)} type="email" id="email" placeholder="Enter your email" />
      </div>

      <Button className='mt-6' disabled={isLoading} onClick={handleSubmit}>{isLoading ? 'Carregando...' : 'Enviar link'}</Button>
    </>
  )
}