import React, { useState } from 'react';
import AdminLayout from '../../components/Layouts/AdminLayout';

const students = [
  {
    id: 1,
    name: 'Akhil Paudel',
    stream: 'Computer Science',
    photo: '/api/placeholder/200/200',
    email: 'akhil.paudel@example.com',
    year: '3rd Year',
  },
  {
    id: 2,
    name: 'Kyurosh Neupane',
    stream: 'BsIT',
    photo: '/api/placeholder/200/200',
    email: 'kyurosh.neupane@example.com',
    year: '2nd Year',
  },
  {
    id: 3,
    name: 'Babish Shrestha',
    stream: 'Business',
    photo: '/api/placeholder/200/200',
    email: 'babish.shrestha@example.com',
    year: '4th Year',
  },
  {
    id: 4,
    name: 'Vishakha Buddhacharya',
    stream: 'BBA',
    photo: '/api/placeholder/200/200',
    email: 'vishakha.buddhacharya@example.com',
    year: '1st Year',
  },
];

const StudentList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStream, setSelectedStream] = useState('All');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);

  const uniqueStreams = ['All', ...new Set(students.map(student => student.stream))];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStream = selectedStream === 'All' || student.stream === selectedStream;
    
    return matchesSearch && matchesStream;
  });

  const handleDeleteClick = (student) => {
    setStudentToDelete(student);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (studentToDelete) {
      // Here you would typically call an API to delete the student
      console.log(`Deleted student with ID: ${studentToDelete.id}`);
      setShowDeleteModal(false);
      setStudentToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setStudentToDelete(null);
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 w-full">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Student Directory</h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 flex items-center gap-2">
              <span className="text-lg">+</span> Add Student
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            {/* Search Box */}
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
            
            {/* Filter Dropdown */}
            <div className="w-full md:w-1/4">
              <select
                value={selectedStream}
                onChange={(e) => setSelectedStream(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {uniqueStreams.map((stream) => (
                  <option key={stream} value={stream}>
                    {stream}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-4 px-6 rounded-tl-lg">Student</th>
                  <th className="py-4 px-6">Stream</th>
                  <th className="py-4 px-6">Year</th>
                  <th className="py-4 px-6">Email</th>
                  <th className="py-4 px-6 rounded-tr-lg text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={student.photo}
                            alt={student.name}
                            className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-200"
                          />
                          <span className="font-medium text-gray-800">{student.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {student.stream}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-600">{student.year}</td>
                      <td className="py-4 px-6 text-gray-600">{student.email}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center gap-2">
                          <a
                            href={`/student-profile/${student.id}`}
                            className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200"
                          >
                            View Profile
                          </a>
                          <button
                            onClick={() => handleDeleteClick(student)}
                            className="bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200"
                          >
                            Remove
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-8 text-center text-gray-500">
                      No students match your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex justify-between items-center text-sm text-gray-600">
            <span>Showing {filteredStudents.length} of {students.length} students</span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Confirm Deletion</h3>
            <p className="mb-6">
              Are you sure you want to remove <span className="font-medium">{studentToDelete?.name}</span> from the student directory? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default StudentList;