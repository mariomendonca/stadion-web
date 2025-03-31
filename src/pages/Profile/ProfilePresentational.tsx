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

interface ProfileViewProps {
  user: User | null
  onEditProfile: () => void
  onLogout: () => void
  onViewCreatedEvents: () => void
  onViewAttendingEvents: () => void
  onChangePassword: () => void
  onNotificationPreferences: () => void
  onDeleteAccount: () => void
}

export function ProfileView({
  user,
  onEditProfile,
  onLogout,
  onViewCreatedEvents,
  onViewAttendingEvents,
  onChangePassword,
  onNotificationPreferences,
  onDeleteAccount,
}: ProfileViewProps) {
  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src={user?.imageUrl || '/default-avatar.png'}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <button 
                onClick={onEditProfile}
                className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full hover:bg-blue-700"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
              <p className="text-gray-600">@{user?.username}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md"
          >
            Logout
          </button>
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
              <button 
                onClick={onEditProfile}
                className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Edit Information
              </button>
            </div>
          </div>

          {/* Activity Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Events Created</h3>
                  <p className="text-sm text-gray-600">Manage your events</p>
                </div>
                <button 
                  onClick={onViewCreatedEvents}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Events Attending</h3>
                  <p className="text-sm text-gray-600">See your upcoming events</p>
                </div>
                <button 
                  onClick={onViewAttendingEvents}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Settings */}
        <div className="space-y-6">
          {/* Account Settings */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h2>
            <div className="space-y-4">
              <button 
                onClick={onChangePassword}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Change Password
              </button>
              <button 
                onClick={onNotificationPreferences}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Notification Preferences
              </button>
              <button 
                onClick={onDeleteAccount}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
              >
                Delete Account
              </button>
            </div>
          </div>

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