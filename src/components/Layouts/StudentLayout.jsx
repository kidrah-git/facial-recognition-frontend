// src/components/Layout.jsx
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
// import Sidebar from "../components/Sidebar/Sidebar";

const StudentLayout = ({ children, title = "Dashboard" }) => {
  return (
    <div className="bg-purple-50 min-h-screen w-screen flex overflow-y-hidden">
      <Sidebar/>
      <div className="w-full p-6 ml-32 h-full overflow-y-auto relative z-0">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>

        {children}
      </div>
    </div>
  );
};

export default StudentLayout;
