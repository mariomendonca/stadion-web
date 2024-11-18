import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthenticationLayout } from './layouts/AuthenticationLayout'
import { Login } from './pages/Login'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationLayout />}>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </Router>
  )
}
