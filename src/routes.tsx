import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthenticationLayout } from './layouts/AuthenticationLayout'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </Router>
  )
}
