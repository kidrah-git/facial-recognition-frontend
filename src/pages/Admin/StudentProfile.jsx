// StudentProfile.jsx

import React from "react";
import AdminLayout from "../../components/Layouts/AdminLayout";

const dummyStudent = {
  name: "Aarya Sharma",
  studentId: "NAC123456",
  department: "Computer Science",
  attendanceStatus: "Present",
  photoURL: "https://randomuser.me/api/portraits/women/44.jpg"
};

const StudentProfile = ({ student = dummyStudent }) => {
  if (!student) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-center text-gray-500">No student data available.</p>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden p-6">
          <div className="flex flex-col items-center text-center">
            <img
              src={student.photoURL || "/placeholder-face.jpg"}
              alt={`${student.name}'s profile`}
              className="w-32 h-32 rounded-full object-cover shadow-lg"
            />
            <h2 className="text-2xl font-semibold mt-4">{student.name}</h2>
            <p className="text-sm text-gray-600 mt-1">ID: {student.studentId}</p>
            <p className="text-sm text-gray-600">Department: {student.department}</p>

            <div
              className={`mt-4 px-4 py-2 rounded-full text-sm font-semibold ${
                student.attendanceStatus === "Present"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {student.attendanceStatus}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>

  );
};

export default StudentProfile;
