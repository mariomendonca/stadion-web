import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* TODO: Add header/navbar here */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </main>
  )
} 