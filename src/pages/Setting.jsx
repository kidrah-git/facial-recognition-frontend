import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

const SettingOption = ({ icon, title, description }) => {
  return (
    <div className="p-4 flex items-start gap-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
      <div className="bg-gray-100 p-3 rounded-full text-xl flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const SettingsPage = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event) => {
      console.error('Caught error in SettingsPage:', event.error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <h2 className="text-red-600 text-center mt-10">
        Something went wrong while loading Settings.
      </h2>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-blue-100 flex">
      {/* Sidebar styled like Login card */}
      <Sidebar />

      {/* Main Settings Content */}
      <main className="flex-1 m-4 p-6 bg-white rounded-lg shadow overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SettingOption
            icon="👤"
            title="Account Information"
            description="View and update your account details."
          />
          <SettingOption
            icon="🔒"
            title="Reset Password"
            description="Change your account password securely."
          />
          <SettingOption
            icon="🔔"
            title="Notifications"
            description="Manage your notification preferences."
          />
          <SettingOption
            icon="❓"
            title="Help & Support"
            description="Get assistance or contact support."
          />
          <SettingOption
            icon="⚙️"
            title="General Settings"
            description="Configure system preferences."
          />
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
