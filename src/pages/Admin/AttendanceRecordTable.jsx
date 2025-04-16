import React, { useState } from 'react';
import AdminLayout from '../../components/Layouts/AdminLayout';
// adjust the path if needed

const AttendanceRecordTable = () => {
  const initialRecords = [
    { id: 1, date: '2025-04-08', name: 'Arun Chamling', stream: 'Computer Science' },
    { id: 2, date: '2025-04-07', name: 'Pratik Khadka', stream: 'Engineering' },
    { id: 3, date: '2025-04-07', name: 'Raju Lama', stream: 'Business' },
    { id: 4, date: '2025-04-06', name: 'David Khatri', stream: 'Mathematics' },
    { id: 5, date: '2025-04-05', name: 'Mohit Rai', stream: 'Physics' },
    { id: 6, date: '2025-04-05', name: 'Shristina Shrestha', stream: 'Computer Science' },
    { id: 7, date: '2025-04-04', name: 'Srestha Ghimire', stream: 'Psychology' },
    { id: 8, date: '2025-04-03', name: 'Shrejal Adhikari', stream: 'Engineering' },
    { id: 9, date: '2025-04-02', name: 'Ravi Teja', stream: 'Business' },
    { id: 10, date: '2025-04-01', name: 'Allu Arjun', stream: 'Mathematics' },
  ];

  const [records, setRecords] = useState(initialRecords);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecords = records.filter(record =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.stream.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.date.includes(searchTerm)
  );

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <AdminLayout>
      <div className="max-w-5xl mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Attendance Records</h1>

        {/* Search Input */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Search by name, stream or date..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          {searchTerm && (
            <button
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              onClick={() => setSearchTerm('')}
            >
              ✕
            </button>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-600">
              <tr>
                <th className="px-6 py-4 text-left text-white font-semibold">Date</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Name</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Stream</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentRecords.length > 0 ? (
                currentRecords.map((record, index) => (
                  <tr key={record.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap">{record.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{record.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{record.stream}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No records found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filteredRecords.length > recordsPerPage && (
          <div className="flex justify-center mt-4">
            <nav className="flex items-center">
              <button
                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 mx-1 rounded ${
                  currentPage === 1 
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                Previous
              </button>

              <div className="flex mx-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-3 py-1 mx-1 rounded ${
                      currentPage === number
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {number}
                  </button>
                ))}
              </div>

              <button
                onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 mx-1 rounded ${
                  currentPage === totalPages 
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                Next
              </button>
            </nav>
          </div>
        )}

        {/* Back button */}
        <div className="mt-6 text-center">
          <button className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Attendance
          </button>
        </div>
      </div>
      </AdminLayout>
    </>
  );
};

export default AttendanceRecordTable;
