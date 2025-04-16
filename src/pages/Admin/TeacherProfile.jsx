// TeacherProfile.jsx
import React from "react";
import AdminLayout from "../../components/Layouts/AdminLayout";

const TeacherProfile = () => {
  return (
    <AdminLayout>
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-5xl mx-auto mt-10 border border-gray-200">
        {/* Header Section */}
        <div className="flex items-center gap-8 mb-10">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="rounded-full w-28 h-28 object-cover border-2 border-blue-100"
          />
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">Ravi Chandra Gunrung</h1>
            <p className="text-md text-blue-700 mt-1">Mathematics Teacher</p>
            <p className="text-sm text-gray-500">ravi.gunrung@example.com</p>
          </div>
        </div>

        {/* Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-700">
          <ProfileField label="Phone Number" value="+123 456 7890" />
          <ProfileField label="Department" value="Science & Mathematics" />
          <ProfileField label="Employee ID" value="TCH-1024" />
          <ProfileField label="Joining Date" value="August 15, 2020" />
          <ProfileField label="Qualification" value="M.Sc. Mathematics" />
          <ProfileField label="Experience" value="7 Years" />
          <ProfileField label="Date of Birth" value="March 12, 1985" />
          <ProfileField label="Gender" value="Male" />
          <ProfileField
            label="Address"
            value="123 Lotus Avenue, Greenfield Town, New Delhi, India"
          />
        </div>

        {/* Action Button */}
        <div className="mt-10 text-right">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-200 shadow-md">
            Edit Profile
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

// Reusable Profile Field Component
const ProfileField = ({ label, value }) => (
  <div>
    <p className="text-gray-500 mb-1 font-medium">{label}</p>
    <p className="text-gray-800">{value}</p>
  </div>
);

export default TeacherProfile;
