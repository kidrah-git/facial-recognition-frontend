import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProfile from "./pages/Admin/StudentProfile";
import StudentList from "./pages/Admin/StudentList";
import TeacherProfile from "./pages/Admin/TeacherProfile";
import SettingsPage from "./pages/Setting";



function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard/>} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/setting" element={<SettingsPage />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/teacher-profile" element={<TeacherProfile />} />
        
      </Routes>
    </Router>
  );
}

export default App;
