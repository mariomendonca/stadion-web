import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function AppLayout() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </main>
  )
} 