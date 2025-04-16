// src/components/Layout.jsx
import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ml-32 h-full overflow-y-auto relative z-0">{children}</div>
    </div>
  );
};

export default AdminLayout;
