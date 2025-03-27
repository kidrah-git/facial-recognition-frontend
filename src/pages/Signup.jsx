// const SignUp = () => {
//     return (
//       <div className="flex justify-center w-screen bg-gray-100 h-screen relative">
//         <div className="m-auto p-6 rounded-lg flex flex-col gap-y-4 bg-white shadow-lg w-1/3">
//           <h2 className="text-2xl font-semibold text-center">SIGN-UP</h2>
          
        //   <form action="/" className="flex flex-col gap-y-4">
        //     <div className="flex flex-col">
        //       <label htmlFor="email">Your Email:</label>
        //       <input
        //         type="email"
        //         id="email"
        //         className="rounded-md border border-gray-300 p-2"
        //       />
        //     </div>
  
        //     <div className="grid grid-cols-2 gap-x-2">
        //       <div className="flex flex-col">
        //         <label htmlFor="name">Your Name:</label>
        //         <input
        //           type="text"
        //           id="name"
        //           className="rounded-md border border-gray-300 p-2"
        //         />
        //       </div>
        //       <div className="flex flex-col">
        //         <label htmlFor="studentId">Student ID:</label>
        //         <input
        //           type="text"
        //           id="studentId"
        //           className="rounded-md border border-gray-300 p-2"
        //         />
        //       </div>
        //     </div>
  
        //     <div className="flex flex-col">
        //       <label htmlFor="password">Create Password:</label>
        //       <input
        //         type="password"
        //         id="password"
        //         className="rounded-md border border-gray-300 p-2"
        //       />
        //     </div>
  
        //     <div className="flex flex-col">
        //       <label htmlFor="confirmPassword">Confirm Password:</label>
        //       <input
        //         type="password"
        //         id="confirmPassword"
        //         className="rounded-md border border-gray-300 p-2"
        //       />
        //     </div>
  
        //     <div className="flex flex-col">
        //       <label>Images:</label>
        //       <div className="border border-gray-300 p-4 flex justify-center items-center">
        //         <button className="bg-gray-200 p-2 rounded-md text-sm">Drag and Drop Images Here</button>
        //       </div>
        //     </div>
  
            
        //   </form>
          
//           <div className="text-center text-sm mt-4">
//             Already have an account? <a href="/login" className="text-red-500">Log in</a>
//           </div>
//         </div>
//         <div className="absolute right-20 top-1/2 transform -translate-y-1/2 text-xl font-semibold text-gray-700">
//           Who Are You?
//         </div>
//       </div>
//     );
//   };
  
//   export default SignUp;
  
import { useState } from "react";

const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    { name: "Admin", icon: "⚙️" },
    { name: "Teacher", icon: "👨‍🏫" },
    { name: "Enrollment", icon: "🖊️" },
    { name: "Student", icon: "🎓" },
  ];

  return (
    <div className="flex w-screen justify-center items-center h-screen bg-gray-100">
      {!selectedRole ? (
        <div className="bg-white p-8 rounded-lg shadow-lg w-2/3 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-6">Who Are You?</h2>
          <div className="grid grid-cols-4 gap-6">
            {roles.map((role) => (
              <div
                key={role.name}
                onClick={() => setSelectedRole(role.name)}
                className={`flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedRole === role.name ? "border-blue-500" : "border-gray-300"
                }`}
              >
                <div className="text-4xl">{role.icon}</div>
                <p className="mt-2 text-lg font-medium">{role.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
          <h2 className="text-2xl font-semibold text-center">{selectedRole} Sign-Up</h2>
          {/* <form className="flex flex-col gap-y-4 mt-4">
            <div className="flex flex-col">
              <label>Email:</label>
              <input type="email" className="rounded-md border p-2" />
            </div>
            <div className="flex flex-col">
              <label>Password:</label>
              <input type="password" className="rounded-md border p-2" />
            </div>
            <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Sign-Up</button>
            <button className="mt-2 text-blue-500" onClick={() => setSelectedRole(null)}>Back</button>
          </form> */}


<form action="/" className="flex flex-col gap-y-4">
            <div className="flex flex-col">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                className="rounded-md border border-gray-300 p-2"
              />
            </div>
  
            <div className="grid grid-cols-2 gap-x-2">
              <div className="flex flex-col">
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="studentId">Student ID:</label>
                <input
                  type="text"
                  id="studentId"
                  className="rounded-md border border-gray-300 p-2"
                />
              </div>
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="password">Create Password:</label>
              <input
                type="password"
                id="password"
                className="rounded-md border border-gray-300 p-2"
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                className="rounded-md border border-gray-300 p-2"
              />
            </div>
  
            <div className="flex flex-col">
              <label>Images:</label>
              <div className="border border-gray-300 p-4 flex justify-center items-center">
                <button className="bg-gray-200 p-2 rounded-md text-sm">Drag and Drop Images Here</button>
              </div>
            </div>
            <button className="bg-blue-600 p-2 rounded-md hover:bg-blue-700">Sign-Up</button>
            <button className="mt-2 text-blue-500" onClick={() => setSelectedRole(null)}>Back</button>

            
          </form>
          
          
        </div>
      )}
    </div>
  );
};

export default SignUp;
