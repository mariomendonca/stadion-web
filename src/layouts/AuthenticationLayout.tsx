import { Outlet } from 'react-router-dom'

export function AuthenticationLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="gap-y-4 flex flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
