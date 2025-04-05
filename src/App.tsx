import { LanguageProvider } from '@/contexts/LanguageContext'
import { UserProvider } from '@/contexts/UserContext'
import { AppRoutes } from './routes'
import '@/i18n'

export function App() {
  return (
    <LanguageProvider>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </LanguageProvider>
  )
}

export default App
