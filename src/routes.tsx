import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthenticationLayout } from './layouts/AuthenticationLayout'
import { AppLayout } from './layouts/AppLayout'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { ForgotPassword } from './pages/ForgotPassword'
import { Home } from './pages/Home'
import { ActivateAccount } from './pages/ActivateAccount'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Authentication routes */}
        <Route path="/auth" element={<AuthenticationLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='activate/:id' element={<ActivateAccount />} />
        </Route>

        {/* App routes */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          {/* Add more authenticated routes here */}
        </Route>
      </Routes>
    </Router>
  )
}
