import React from 'react';
import AdminLayout from '../../components/Layouts/AdminLayout';

const teachers = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    department: 'Computer Science',
    photo: 'https://randomuser.me/api/portraits/women/28.jpg',
    specialization: 'Artificial Intelligence',
  },
  {
    id: 2,
    name: 'Prof. Rajesh Gupta',
    department: 'Information Technology',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    specialization: 'Data Science',
  },
  {
    id: 3,
    name: 'Dr. Anita Patel',
    department: 'Business Administration',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
    specialization: 'Marketing Management',
  },
  {
    id: 4,
    name: 'Prof. Sunil Thakur',
    department: 'Mathematics',
    photo: 'https://randomuser.me/api/portraits/men/55.jpg',
    specialization: 'Applied Statistics',
  },
  {
    id: 5,
    name: 'Dr. Meera Kapoor',
    department: 'Physics',
    photo: 'https://randomuser.me/api/portraits/women/62.jpg',
    specialization: 'Quantum Mechanics',
  },
];

const TeacherList = () => {
  const handleDelete = (id) => {
    alert(`Deleted teacher with ID: ${id}`);
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center p-6 w-full">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-5xl border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Faculty Members</h1>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300 shadow-md">
              Add New Teacher
            </button>
          </div>
          
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white">
                  <th className="py-4 px-6">ID</th>
                  <th className="py-4 px-6">Name</th>
                  <th className="py-4 px-6">Department</th>
                  <th className="py-4 px-6">Specialization</th>
                  <th className="py-4 px-6">Photo</th>
                  <th className="py-4 px-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher, index) => (
                  <tr
                    key={teacher.id}
                    className={`border-t border-gray-200 hover:bg-indigo-50 transition duration-200 ${
                      index % 2 === 1 ? 'bg-gray-50' : ''
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-gray-700">{teacher.id}</td>
                    <td className="py-4 px-6 font-medium text-gray-900">{teacher.name}</td>
                    <td className="py-4 px-6 text-gray-700">{teacher.department}</td>
                    <td className="py-4 px-6 text-gray-700">{teacher.specialization}</td>
                    <td className="py-4 px-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-indigo-200">
                        <img
                          src={teacher.photo}
                          alt={teacher.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-3">
                        <a
                          href={`/teacher-profile`}
                          className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-3 py-1.5 rounded-md flex items-center gap-1 transition duration-200"
                        >
                          <span className="text-sm">View</span>
                        </a>
                        <button
                          onClick={() => handleDelete(teacher.id)}
                          className="bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1.5 rounded-md flex items-center gap-1 transition duration-200"
                        >
                          <span className="text-sm">Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex justify-between items-center text-gray-600">
            <div>Showing {teachers.length} teachers</div>
            <div className="flex space-x-2">
              <button className="bg-white border border-gray-300 px-3 py-1 rounded hover:bg-gray-50">Previous</button>
              <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">1</button>
              <button className="bg-white border border-gray-300 px-3 py-1 rounded hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default TeacherList;