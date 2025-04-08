// Layout.jsx
import React from "react";
import {
  Home,
  Users,
  BookOpen,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => (
  <div className="bg-gray-800 text-white w-64 min-h-screen p-6">
    <h2 className="text-2xl font-bold mb-8">Teacher Profile</h2>
    <nav className="space-y-4">
      <a href="#" className="flex items-center gap-3 hover:text-blue-400">
        <Home size={20} /> Dashboard
      </a>
      <a href="#" className="flex items-center gap-3 hover:text-blue-400">
        <Users size={20} /> Students
      </a>
      <a href="#" className="flex items-center gap-3 hover:text-blue-400">
        <BookOpen size={20} /> Courses
      </a>
      <a href="#" className="flex items-center gap-3 hover:text-blue-400">
        <Settings size={20} /> Settings
      </a>
      <a href="#" className="flex items-center gap-3 text-red-400 hover:text-red-600">
        <LogOut size={20} /> Logout
      </a>
    </nav>
  </div>
);

const TeacherLayout = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 bg-gray-100 p-10">{children}</main>
  </div>
);

export default TeacherLayout;
