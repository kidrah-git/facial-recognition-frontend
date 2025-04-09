import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="bg-white rounded-2xl shadow-lg w-1/3 flex overflow-hidden">
        {/* Left section with image/branding */}
        <div className="hidden md:block w-2/5 bg-gradient-to-b from-orange-200
         to-indigo-800 p-6 flex-shrink-0">
          <div className="h-full flex flex-col justify-between">
            <div className="text-white font-bold text-xl">
              <img src="/logo.svg"/>

            </div>
            <div className="text-blue-100 text-sm">
              <p className="mb-4">Advanced attendance tracking with facial recognition</p>
              <p>&copy; 2025 Presidential System</p>
            </div>
          </div>
        </div>
        
        {/* Right section with login form */}
        <div className="w-full md:w-3/5 p-6">
          <div className="flex items-center justify-center md:justify-start mb-6">
           
            <div>
              <span className="text-2xl font-bold text-gray-800">Presidential </span>
              <div className="text-lg text-gray-500"> Facial Attendance System</div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-5">Welcome back</h3>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">
                User ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  placeholder="Enter your ID"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <a href="#" className="text-xs font-medium text-blue-600 hover:text-blue-500">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-1 focus:inset-ring-indigo-500-500 focus:border-indigo-500"
                  required
                />
                <div 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember_me" className="ml-2 block text-xs text-gray-600">
                Keep me signed in
              </label>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-lg text-white font-medium bg-blue-500 hover:bg-[#4568dc] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm transition-all duration-200"
              >
                Sign in
              </button>
            </div>
          </form>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-600">
              Don't have an account?{" "}
              <a href="/signup" className="font-medium text-blue-100 hover:text-blue-500">
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;