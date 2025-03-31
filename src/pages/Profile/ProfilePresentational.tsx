import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'

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

interface ProfilePresentationalProps {
  user: User | null
  onEditProfile: () => void
  onLogout: () => void
  onViewCreatedEvents: () => void
  onViewAttendingEvents: () => void
  onChangePassword: () => void
  onNotificationPreferences: () => void
  onDeleteAccount: () => void
}

export function ProfilePresentational({
  user,
  onEditProfile,
  onLogout,
  onViewCreatedEvents,
  onViewAttendingEvents,
  onChangePassword,
  onNotificationPreferences,
  onDeleteAccount,
}: ProfilePresentationalProps) {
  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="relative">
              {user?.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-400" />
                </div>
              )}
              {/* <Button 
                onClick={onEditProfile}
                variant="default"
                size="icon"
                className="absolute bottom-0 right-0 rounded-full"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </Button> */}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
              <p className="text-gray-600">@{user?.username}</p>
            </div>
          </div>
          <Button
            onClick={onLogout}
            variant="destructive"
            size="sm"
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Personal Info */}
        <div className="md:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-gray-900">{user?.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <p className="mt-1 text-gray-900">{new Date(user?.bornDate || '').toLocaleDateString()}</p>
              </div>
              {/* <Button 
                onClick={onEditProfile}
                variant="outline"
                size="sm"
                className="mt-4"
              >
                Edit Information
              </Button> */}
            </div>
          </div>

          {/* Activity Section - Not available in MVP */}
          {/* <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Events Created</h3>
                  <p className="text-sm text-gray-600">Manage your events</p>
                </div>
                <Button 
                  onClick={onViewCreatedEvents}
                  variant="ghost"
                  size="sm"
                >
                  View All
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Events Attending</h3>
                  <p className="text-sm text-gray-600">See your upcoming events</p>
                </div>
                <Button 
                  onClick={onViewAttendingEvents}
                  variant="ghost"
                  size="sm"
                >
                  View All
                </Button>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right Column - Settings */}
        <div className="space-y-6">
          {/* Account Settings - Not available in MVP */}
          {/* <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h2>
            <div className="space-y-4">
              <Button 
                onClick={onChangePassword}
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                Change Password
              </Button>
              <Button 
                onClick={onNotificationPreferences}
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                Notification Preferences
              </Button>
              <Button 
                onClick={onDeleteAccount}
                variant="destructive"
                size="sm"
                className="w-full justify-start"
              >
                Delete Account
              </Button>
            </div>
          </div> */}

          {/* Statistics */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Statistics</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Member Since</p>
                <p className="text-sm font-medium text-gray-900">
                  {new Date(user?.createdAt || '').toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Account Status</p>
                <p className="text-sm font-medium text-gray-900">
                  {user?.isActive ? 'Active' : 'Inactive'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 