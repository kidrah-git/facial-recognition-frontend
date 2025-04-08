import React from 'react';
import AdminLayout from '../../components/Layouts/AdminLayout';

const students = [
  {
    id: 1,
    name: 'Akhil Paudel',
    stream: 'Computer Science',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Kyurosh Neupane',
    stream: 'BsIT',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 3,
    name: 'Babish Shrestha',
    stream: 'Business',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 4,
    name: 'Vishakha Buddhacharya',
    stream: 'BBA',
    photo: 'https://randomuser.me/api/portraits/men/66.jpg',
  },
];

const StudentList = () => {
  const handleDelete = (id) => {
    alert(`Deleted student with ID: ${id}`);
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 w-full">
        <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-5xl">
          <h1 className="text-2xl font-semibold text-center mb-6">Registered Students</h1>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white rounded-t-xl">
                <th className="py-3 px-4 rounded-tl-xl">ID</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Stream</th>
                <th className="py-3 px-4">Photo</th>
                <th className="py-3 px-4 rounded-tr-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={student.id}
                  className={index % 2 === 1 ? 'bg-gray-100' : ''}
                >
                  <td className="py-3 px-4">{student.id}</td>
                  <td className="py-3 px-4">{student.name}</td>
                  <td className="py-3 px-4">{student.stream}</td>
                  <td className="py-3 px-4">
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </td>

                  <td className="py-3 px-4">
                    <a
                        href='/student-profile'
                        className=" px-4 py-2 rounded-md flex items-center gap-2"
                      >
                        View
                    </a>

                    <button
                      onClick={() => handleDelete(student.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-600"
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>

  );
};

export default StudentList;
