import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { IoAttach } from "react-icons/io5";
import { BsCalendar } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";

const Title = () => {
  return (
    <div className="flex items-center justify-between p-4 py-10 bg-purple-50">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <IoArrowBack size={20} className="text-gray-700"  />
        <span className=" text-lg text-gray-800">Admin</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <IoAttach size={20} className="text-gray-700" />
        <BsCalendar size={18} className="text-gray-700" />
        <HiDotsVertical size={22} className="text-gray-700" />
      </div>
    </div>
  );
};

export default Title;
