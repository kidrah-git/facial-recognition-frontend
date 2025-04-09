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
    { name: "Admin", icon: "⚙️", color: "bg-purple-100 text-purple-600", borderColor: "border-purple-300", hoverColor: "hover:bg-purple-50", activeColor: "border-purple-500 bg-purple-50" },
    { name: "Teacher", icon: "👨‍🏫", color: "bg-blue-100 text-blue-600", borderColor: "border-blue-300", hoverColor: "hover:bg-blue-50", activeColor: "border-blue-500 bg-blue-50" },
    { name: "Enrollment", icon: "🖊️", color: "bg-green-100 text-green-600", borderColor: "border-green-300", hoverColor: "hover:bg-green-50", activeColor: "border-green-500 bg-green-50" },
    { name: "Student", icon: "🎓", color: "bg-amber-100 text-amber-600", borderColor: "border-amber-300", hoverColor: "hover:bg-amber-50", activeColor: "border-amber-500 bg-amber-50" },
  ];

  return (
    <div className="flex w-screen justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      {!selectedRole ? (
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl flex flex-col items-center border border-gray-100">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Welcome to Presidential Attendace System</h2>
          <p className="text-gray-500 mb-8 text-center max-w-lg">Select your role to create your account and get started with our educational platform</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {roles.map((role) => (
              <div
                key={role.name}
                onClick={() => setSelectedRole(role.name)}
                className={`flex flex-col items-center p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${role.hoverColor} ${
                  selectedRole === role.name ? role.activeColor : `${role.borderColor} ${role.color}`
                }`}
              >
                <div className="text-5xl mb-3">{role.icon}</div>
                <p className="text-lg font-semibold">{role.name}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center text-sm text-gray-500">
            Already have an account? <a href="/login" className="text-blue-600 font-medium hover:underline">Log in here</a>
          </div>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg border border-gray-100">
          <div className="flex items-center mb-6">
            <button 
              onClick={() => setSelectedRole(null)}
              className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-gray-800">Create {selectedRole} Account</h2>
          </div>
          
          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-md">
            <p className="text-blue-700 text-sm">Please fill in all the required information to create your account.</p>
          </div>

          <form className="space-y-5">
            <div className="space-y-1">
              <label htmlFor="email" className="font-medium text-gray-700 text-sm">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                required
              />
            </div>
  
            <div className="grid grid-cols-2 gap-x-4">
              <div className="space-y-1">
                <label htmlFor="name" className="font-medium text-gray-700 text-sm">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="studentId" className="font-medium text-gray-700 text-sm">ID Number</label>
                <input
                  type="text"
                  id="studentId"
                  placeholder={`${selectedRole} ID`}
                  className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>
            </div>
  
            <div className="space-y-1">
              <label htmlFor="password" className="font-medium text-gray-700 text-sm">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long</p>
            </div>
  
            <div className="space-y-1">
              <label htmlFor="confirmPassword" className="font-medium text-gray-700 text-sm">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                required
              />
            </div>
  
            <div className="space-y-1">
              <label className="font-medium text-gray-700 text-sm">Profile Photo</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-gray-500 font-medium">Drag & drop your photo here or</p>
                <button type="button" className="mt-2 text-blue-600 hover:text-blue-700 font-medium text-sm">Browse Files</button>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-md"
              >
                Create Account
              </button>
            </div>
            
            <div className="text-center text-sm text-gray-500 pt-2">
              By signing up, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;