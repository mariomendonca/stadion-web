import { useNavigate } from 'react-router-dom'
import { useUser } from '@/contexts/UserContext'
import { ProfileView } from './ProfilePresentational'

export function Profile() {
  const { user, setUser } = useUser()
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    navigate('/auth/login')
  }

  const handleEditProfile = () => {
    // TODO: Implement edit profile functionality
    console.log('Edit profile clicked')
  }

  const handleViewCreatedEvents = () => {
    // TODO: Implement view created events functionality
    console.log('View created events clicked')
  }

  const handleViewAttendingEvents = () => {
    // TODO: Implement view attending events functionality
    console.log('View attending events clicked')
  }

  const handleChangePassword = () => {
    // TODO: Implement change password functionality
    console.log('Change password clicked')
  }

  const handleNotificationPreferences = () => {
    // TODO: Implement notification preferences functionality
    console.log('Notification preferences clicked')
  }

  const handleDeleteAccount = () => {
    // TODO: Implement delete account functionality
    console.log('Delete account clicked')
  }

  return (
    <ProfileView
      user={user}
      onEditProfile={handleEditProfile}
      onLogout={handleLogout}
      onViewCreatedEvents={handleViewCreatedEvents}
      onViewAttendingEvents={handleViewAttendingEvents}
      onChangePassword={handleChangePassword}
      onNotificationPreferences={handleNotificationPreferences}
      onDeleteAccount={handleDeleteAccount}
    />
  )
} 