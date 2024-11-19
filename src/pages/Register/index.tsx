import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Register() {
  return (
    <>
      <div className='flex justify-between items-center'>
        <Link to='/login'>
          <ArrowLeft />
        </Link>
        <h1 className='text-xl text-center font-semibold'>Crie sua conta</h1>
        <ArrowLeft color='transparent' />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="Enter your name" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="bornDate">Data de nascimento</Label>
        <Input type="date" id="bornDate" placeholder="Enter your born date" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Enter your email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Enter your password" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password-confirm">Confirm your Password</Label>
        <Input type="password" id="password-confirm" placeholder="Confirm your password" />
      </div>
      <Button className='w-full mt-6'>Criar conta</Button>
    </>
  )
}