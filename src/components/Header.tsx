import { Link, useLocation } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'
import LogoImg from '@/assets/logo-transparent.png'
import { useTranslation } from 'react-i18next'

export function Header() {
  const { isAuthenticated } = useUser()
  const location = useLocation()
  const { t } = useTranslation()

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={LogoImg} alt="Stadion" className="h-8 w-8" />
              <span className="text-xl font-semibold text-gray-900">Stadion</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/' 
                  ? 'text-gray-900 font-bold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('common.events')}
            </Link>
            
            {isAuthenticated ? (
              <Link 
                to="/profile" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/profile' 
                    ? 'text-gray-900 font-bold' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('common.profile')}
              </Link>
            ) : (
              <Link 
                to="/auth/login" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/login' 
                    ? 'text-gray-900 font-bold' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('common.login')}
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
} 