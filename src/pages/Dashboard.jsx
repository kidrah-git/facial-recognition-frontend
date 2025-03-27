import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Title from "../components/title";
import Profile from "../components/Profile";
import Featured from "../components/admin/Featured";

const Dashboard = () => {
  return (
    <div className="w-screen flex">
      <Sidebar />
      <div className="w-full">
        <Title />
        <Profile />
        <Featured />
      </div>
    </div>
  );
};

export default Dashboard;
