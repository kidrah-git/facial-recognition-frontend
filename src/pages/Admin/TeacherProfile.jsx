// TeacherProfile.jsx
import React from "react";
import AdminLayout from "../../components/Layouts/AdminLayout";

const TeacherProfile = () => {
  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-3xl mx-auto">
        <div className="flex items-center gap-6 mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="rounded-full w-24 h-24 object-cover"
          />
          <div>
            <h1 className="text-3xl font-semibold">Ravi Chandra Gunrung</h1>
            <p className="text-gray-600">Mathematics Teacher</p>
            <p className="text-gray-500 text-sm">johndoe@example.com</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-500">Phone</label>
            <p className="font-medium">+123 456 7890</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Department</label>
            <p className="font-medium">Science & Mathematics</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Joining Date</label>
            <p className="font-medium">August 15, 2020</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Employee ID</label>
            <p className="font-medium">TCH-1024</p>
          </div>
        </div>

        <div className="mt-8 text-right">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default TeacherProfile;
