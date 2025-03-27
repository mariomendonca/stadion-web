import { createContext, useContext, ReactNode, useState, useEffect } from 'react'

interface User {
  id: string
  name: string
  email: string
  username: string
  imageUrl: string
  bornDate: string
  createdAt: string
  isActive: boolean
}

interface UserContextData {
  user: User | null
  setUser: (user: User | null) => void
  isAuthenticated: boolean
}

const UserContext = createContext<UserContextData>({} as UserContextData)

interface UserProviderProps {
  children: ReactNode
}

const STORAGE_KEY = '@stadion:user'

const getStoredUser = (): User | null => {
  const storedUser = localStorage.getItem(STORAGE_KEY)
  return storedUser ? JSON.parse(storedUser) : null
}

const persistUser = (user: User | null): void => {
  if (user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  } else {
    localStorage.removeItem(STORAGE_KEY)
  }
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(getStoredUser)

  useEffect(() => {
    persistUser(user)
  }, [user])

  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated: !!user }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
} 