import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const TeacherDashboard = () => {
  return (
    <div className=" bg-purple-50 min-h-screen w-screen flex">
      <Sidebar />
      <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semi">Teacher Dashboard</h1>
        <div className="flex gap-3">
          {/* Icons can be added here */}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-lg font-medium">Teacher Name</h2>
        </div>

        {/* Announcements */}
        <div className="p-4 bg-white rounded-lg shadow-md col-span-2">
          <h3 className="text-lg font-semibold">Announcements:</h3>
          <div className="flex gap-4 mt-3">
            <button className="bg-gray-300 px-4 py-2 rounded">Events</button>
            <button className="bg-gray-300 px-4 py-2 rounded">Holidays</button>
            <button className="bg-gray-300 px-4 py-2 rounded">Meetings</button>
          </div>
        </div>
      </div>

      {/* Attendance History */}
      <div className="p-4 bg-white rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-semibold">Attendance History:</h3>
        <div className="grid grid-cols-4 text-center gap-4 my-4">
          <div className="p-3 bg-gray-100 rounded-md shadow">
            <p className="text-gray-500">Enrolled Today</p>
            <p className="text-xl font-bold">3,203</p>
          </div>
          <div className="p-3 bg-gray-100 rounded-md shadow">
            <p className="text-gray-500">Present Today</p>
            <p className="text-xl font-bold text-green-500">2,822</p>
          </div>
          <div className="p-3 bg-gray-100 rounded-md shadow">
            <p className="text-gray-500">Absent Today</p>
            <p className="text-xl font-bold text-red-500">381</p>
          </div>
          <div className="p-3 bg-gray-100 rounded-md shadow">
            <p className="text-gray-500">Tardy Today</p>
            <p className="text-xl font-bold text-yellow-500">6</p>
          </div>
        </div>
        {/* Placeholder for chart */}
        <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">
          <p className="text-gray-500">Attendance Trends Chart</p>
        </div>
      </div>

      {/* Classes */}
      <div className="p-4 bg-white rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-semibold">Classes</h3>
        <div className="mt-3 space-y-2">
          <div className="p-3 bg-gray-100 rounded-md shadow">PRG</div>
          <div className="p-3 bg-gray-100 rounded-md shadow">CLD</div>
          <div className="p-3 bg-gray-100 rounded-md shadow">TECH 400</div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default TeacherDashboard;
