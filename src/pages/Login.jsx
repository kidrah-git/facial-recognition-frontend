const Login = () => {
  return (
    <div className="flex justify-center w-screen bg-blue-100 h-screen">
      <div className=" m-auto p-4 rounded-lg flex flex-col gap-y-6 bg-white shadow w-1/3">
        <div className="text-xl text-wrap w-2/3 text-center m-auto font-semibold">
            Welcome to Presidential Facial Attendance System
        </div>
        <div className="w-[200px] m-auto">
          <img src="/public/logo.jpg" alt="Logo" className="w-full" />
        </div>
        <form action="/">
          <div className="flex flex-col gap-y-2 p-5 border border-gray-400 rounded-sm">
            <div className="grid grid-cols-2 gap-x-2">
              <label htmlFor="studentId">Student ID</label>
              <input
                type="text"
                name="studentID"
                id="studentId"
                className="rounded-xl bg-gray-100 p-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-x-2">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                className="rounded-xl bg-gray-100 p-1"
              />
            </div>

            <button type="submit" className="w-1/2 m-auto text-sm hover:!bg-gray-200 mt-2 font-semibold cursor-grab">
              Login
            </button>
          </div>
        </form>
        <div className="text-center text-sm">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
