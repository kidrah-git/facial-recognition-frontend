import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoArrowForward } from "react-icons/io5";

const reports = [
  { id: 1, title: "August Report", description: "Attendance report of august month." },
  { id: 2, title: "July Report", description: "Attendance report of july month." },
  { id: 3, title: "List item", description: "Attendace report of september." },
];

const Featured = () => {
  return (
    <div className="p-4 bg-purple-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-medium text-gray-800 flex items-center gap-1">
          Featured <IoArrowForward size={18} />
        </h2>
        <span className="text-sm text-blue-600 cursor-pointer">Show all</span>
      </div>

      {/* Report List */}
      <div className="bg-white rounded-lg shadow-md">
        {reports.map((report) => (
          <div key={report.id} className="flex justify-between items-center p-4 border-b last:border-none">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                {/* Placeholder Icon (Triangle, Square, Circle) */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gray-500" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}></div>
                  <div className="w-4 h-4 bg-gray-500 mt-1"></div>
                  <div className="w-3 h-3 bg-gray-500 rounded-full mt-1"></div>
                </div>
              </div>
              <div>
                <h3 className="text-md font-semibold text-gray-900">{report.title}</h3>
                <p className="text-sm text-gray-600">{report.description}</p>
              </div>
            </div>

            {/* Right Section */}
            <HiOutlineDotsVertical size={20} className="text-gray-700 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
