import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { FiCalendar, FiBell, FiUser, FiBook, FiPieChart, FiClock } from "react-icons/fi";

const TeacherDashboard = () => {
  // Dummy data
  const teacherData = {
    name: "Dr. Dolma Sherpa ",
    subject: "Computer Science",
    email: "d.sherpa@westcliffuniversity.edu",
    announcements: [
      { id: 1, type: "event", title: "Faculty Meeting", date: "May 15, 3:00 PM", content: "Quarterly faculty meeting in the main auditorium." },
      { id: 2, type: "holiday", title: "Spring Break", date: "Mar 20-24", content: "No classes scheduled during spring break week." },
      { id: 3, type: "meeting", title: "Curriculum Review", date: "May 5, 10:00 AM", content: "Department curriculum review session." }
    ],
    attendance: {
      enrolled: 3203,
      present: 2822,
      absent: 381,
      tardy: 6,
      trend: [85, 88, 90, 87, 92, 89] // Weekly percentages
    },
    classes: [
      { code: "CS101", name: "Introduction to Programming", time: "Mon/Wed 9:00-10:30", students: 45 },
      { code: "CS301", name: "Cloud Computing", time: "Tue/Thu 11:00-12:30", students: 32 },
      { code: "CS400", name: "Advanced Algorithms", time: "Fri 1:00-4:00", students: 28 }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen w-screen flex overflow-y-hidden">
      <Sidebar />
      <div className="w-full ml-0 md:ml-32 p-4 md:p-6 h-full overflow-y-auto relative z-0">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Teacher Dashboard</h1>
          <div className="flex gap-3">
            <button className="p-2 rounded-full bg-white shadow-sm text-gray-600 hover:bg-gray-100">
              <FiBell size={20} />
            </button>
            <button className="p-2 rounded-full bg-white shadow-sm text-gray-600 hover:bg-gray-100">
              <FiCalendar size={20} />
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <FiUser size={32} className="text-indigo-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{teacherData.name}</h2>
            <p className="text-indigo-600 font-medium">{teacherData.subject}</p>
            <p className="text-gray-500 text-sm mt-2">{teacherData.email}</p>
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
              View Profile
            </button>
          </div>

          {/* Announcements */}
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Announcements</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium hover:bg-indigo-200 transition-colors">
                  Events
                </button>
                <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium hover:bg-indigo-200 transition-colors">
                  Holidays
                </button>
                <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium hover:bg-indigo-200 transition-colors">
                  Meetings
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {teacherData.announcements.map(announcement => (
                <div key={announcement.id} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-gray-800">{announcement.title}</h4>
                    <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">{announcement.type}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{announcement.date}</p>
                  <p className="text-gray-600 mt-2 text-sm">{announcement.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Attendance History */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Attendance Overview</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-white border border-gray-100 rounded-lg shadow-xs text-center">
              <p className="text-gray-500 text-sm">Enrolled</p>
              <p className="text-xl font-bold text-gray-800">{teacherData.attendance.enrolled}</p>
            </div>
            <div className="p-4 bg-white border border-gray-100 rounded-lg shadow-xs text-center">
              <p className="text-gray-500 text-sm">Present</p>
              <p className="text-xl font-bold text-green-600">{teacherData.attendance.present}</p>
            </div>
            <div className="p-4 bg-white border border-gray-100 rounded-lg shadow-xs text-center">
              <p className="text-gray-500 text-sm">Absent</p>
              <p className="text-xl font-bold text-red-600">{teacherData.attendance.absent}</p>
            </div>
            <div className="p-4 bg-white border border-gray-100 rounded-lg shadow-xs text-center">
              <p className="text-gray-500 text-sm">Tardy</p>
              <p className="text-xl font-bold text-yellow-600">{teacherData.attendance.tardy}</p>
            </div>
          </div>
          
          {/* Chart Placeholder */}
          <div className="h-48 bg-gray-50 rounded-lg flex flex-col items-center justify-center border border-gray-100">
            <FiPieChart size={32} className="text-gray-400 mb-2" />
            <p className="text-gray-500">Attendance Trends Visualization</p>
            <div className="flex mt-4 gap-1">
              {teacherData.attendance.trend.map((percent, index) => (
                <div 
                  key={index}
                  className="w-6 bg-indigo-100 rounded-t-sm relative"
                  style={{ height: `${percent * 0.5}px` }}
                >
                  <div className="absolute -bottom-5 left-0 right-0 text-center text-xs text-gray-500">{`W${index+1}`}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Classes */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Your Classes</h3>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {teacherData.classes.map((classItem, index) => (
              <div key={index} className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-indigo-100 flex items-center justify-center">
                    <FiBook className="text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{classItem.code}</h4>
                    <p className="text-xs text-gray-500">{classItem.name}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <FiClock className="mr-2" />
                  {classItem.time}
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  {classItem.students} students
                </div>
                <button className="mt-4 w-full py-2 text-sm border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                  View Class
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;