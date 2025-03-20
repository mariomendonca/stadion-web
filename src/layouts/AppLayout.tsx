import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* TODO: Add header/navbar here */}
      <Outlet />
    </main>
  )
} 