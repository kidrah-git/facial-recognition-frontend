import React from "react";

const profiles = [
  { id: 1, label: "1st" },
  { id: 2, label: "2nd" },
  { id: 3, label: "3rd" },
  { id: 4, label: "4th" },
];

const Profile = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-medium text-gray-800 mb-2">Profiles:</h2>
      <div className="flex gap-4">
        {profiles.map((profile, index) => (
          <div
            key={profile.id}
            className="bg-gray-200 rounded-xl flex flex-col items-center justify-center p-4 w-1/4 h-60"
          >
            <div className="w-8 h-8 bg-gray-400 clip-triangle"></div>
            <div className="w-6 h-6 bg-gray-500 mt-2"></div>
            <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center mt-2 text-white text-sm">
              {profile.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
