// src/components/Layout.jsx
import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default AdminLayout;
