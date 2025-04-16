import React from "react";
import { Link } from "react-router-dom";
import StudentLayout from "../components/Layouts/StudentLayout";


const StudentDashboard = () => {
  return (
    <StudentLayout title="Student Dashboard">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg mb-6 p-6 text-white">
        <h2 className="text-2xl font-bold">Welcome back, Alex Morgan</h2>
        <p className="mt-1 text-blue-100">Computer Science, Year 3 | Student ID: CS2023078</p>
      </div>

      {/* Announcements */}
      <div className="p-5 bg-white rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Announcements</h3>
          <Link to="/all-announcements" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All
          </Link>
        </div>
        <div className="space-y-3">
          <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-md">
            <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">NEW</span>
            <h4 className="font-medium mt-1">Final Exam Schedule Released</h4>
            <p className="text-sm text-gray-600 mt-1">The final examination schedule for Spring 2025 has been released. Please check your email for details.</p>
          </div>
          <div className="p-3 bg-amber-50 border-l-4 border-amber-500 rounded-md">
            <span className="text-xs font-semibold text-amber-600 bg-amber-100 px-2 py-1 rounded-full">EVENT</span>
            <h4 className="font-medium mt-1">Tech Career Fair - April 15, 2025</h4>
            <p className="text-sm text-gray-600 mt-1">Don't miss the opportunity to network with leading tech companies on campus next week.</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4 flex-wrap">
          <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors">Academic</button>
          <button className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors">Events</button>
          <button className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors">IT Club</button>
          <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors">Holidays</button>
        </div>
      </div>

      {/* Profile and Attendance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Profile Card */}
        <div className="p-5 bg-white rounded-lg shadow-md flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mb-4 border-4 border-white shadow-md overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Alex Morgan</h2>
          <p className="text-gray-500 mb-3">Computer Science</p>
          <div className="w-full mt-2 space-y-2">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Semester:</span>
              <span className="font-medium">Spring 2025</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">GPA:</span>
              <span className="font-medium">3.8/4.0</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Credits:</span>
              <span className="font-medium">86/120</span>
            </div>
          </div>
          <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Edit Profile
          </button>
        </div>

        {/* Attendance Card */}
        <div className="p-5 bg-white rounded-lg shadow-md col-span-1 md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Attendance Overview</h3>
            <Link to="/attendance-record-table" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View Detailed Report
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-gray-500">Enrolled Today</p>
              <p className="text-xl font-bold text-gray-800">3,203</p>
              <p className="text-xs text-blue-600 mt-1">+2% from yesterday</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-gray-500">Present Today</p>
              <p className="text-xl font-bold text-green-600">2,822</p>
              <p className="text-xs text-green-600 mt-1">88% of enrolled</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg border border-red-100">
              <p className="text-sm text-gray-500">Absent Today</p>
              <p className="text-xl font-bold text-red-600">381</p>
              <p className="text-xs text-red-600 mt-1">12% of enrolled</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
              <p className="text-sm text-gray-500">Late Today</p>
              <p className="text-xl font-bold text-amber-600">6</p>
              <p className="text-xs text-amber-600 mt-1">0.2% of present</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <div className="p-3 bg-gray-50 border-b border-gray-200">
              <h4 className="font-medium text-gray-700">Your Attendance Trends</h4>
            </div>
            <div className="h-48 bg-white p-4 flex items-center justify-center">
              <div className="w-full">
                <div className="flex justify-between mb-2">
                  <div className="text-xs text-gray-500">Jan</div>
                  <div className="text-xs text-gray-500">Feb</div>
                  <div className="text-xs text-gray-500">Mar</div>
                  <div className="text-xs text-gray-500">Apr</div>
                </div>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
                    <div style={{ width: "90%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                  <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
                    <div style={{ width: "85%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                  <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
                    <div style={{ width: "92%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                  <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
                    <div style={{ width: "88%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                    <span className="text-xs text-gray-500">Present</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                    <span className="text-xs text-gray-500">Absent</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mr-1"></div>
                    <span className="text-xs text-gray-500">Late</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="p-5 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Current Courses</h3>
          <Link to="/courses" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All Courses
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded mb-2">CS 405</span>
                <h4 className="font-medium">Advanced Programming</h4>
                <p className="text-sm text-gray-500 mt-1">Dr. Sarah Johnson</p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">94%</span>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between text-sm">
              <span className="text-gray-500">Mon, Wed, Fri</span>
              <span className="text-gray-700 font-medium">10:30 - 12:00</span>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-800 rounded mb-2">CLD 302</span>
                <h4 className="font-medium">Cloud Computing</h4>
                <p className="text-sm text-gray-500 mt-1">Prof. Michael Chen</p>
              </div>
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium">87%</span>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between text-sm">
              <span className="text-gray-500">Tue, Thu</span>
              <span className="text-gray-700 font-medium">13:15 - 15:00</span>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 rounded mb-2">TECH 400</span>
                <h4 className="font-medium">Emerging Technologies</h4>
                <p className="text-sm text-gray-500 mt-1">Dr. Robert Williams</p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">96%</span>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between text-sm">
              <span className="text-gray-500">Wed</span>
              <span className="text-gray-700 font-medium">15:30 - 18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links with improved color coordination */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <Link to="/grades" className="p-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors flex flex-col items-center justify-center text-center">
          <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
          <span>Grades</span>
        </Link>
        <Link to="/schedule" className="p-4 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition-colors flex flex-col items-center justify-center text-center">
          <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span>Schedule</span>
        </Link>
        <Link to="/assignments" className="p-4 bg-sky-600 text-white rounded-lg shadow-md hover:bg-sky-700 transition-colors flex flex-col items-center justify-center text-center">
          <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <span>Assignments</span>
        </Link>
        <Link to="/resources" className="p-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors flex flex-col items-center justify-center text-center">
          <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          <span>Resources</span>
        </Link>
      </div>
    </StudentLayout>
  );
};

export default StudentDashboard;