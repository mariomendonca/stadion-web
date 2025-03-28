import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-center mb-4">
        Ops! Página não encontrada
      </h2>
      <p className="text-muted-foreground text-center mb-8 max-w-md">
        Parece que você tentou acessar uma página que não existe ou foi movida.
      </p>
      <Button onClick={() => navigate('/')}>
        Voltar para a página inicial
      </Button>
    </div>
  )
} 