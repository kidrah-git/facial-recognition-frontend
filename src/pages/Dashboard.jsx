// src/pages/Dashboard.jsx
import React from "react";
import Title from "../components/title";
import Profile from "../components/Profile";
import Featured from "../components/admin/Featured";
import AdminLayout from "../components/Layouts/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <Title />
      <Profile />
      <Featured />
    </AdminLayout>
  );
};

export default Dashboard;
