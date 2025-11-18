import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="flex flex-col bg-white w-[400px] p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Login
        </h2>

        {/* Username */}
        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 text-gray-700 font-medium">
            Username
          </label>
          <input
            type="text"
            autoComplete="off"
            name="username"
            placeholder="Enter your username/email ID"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#d4af33]"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 text-gray-700 font-medium">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#d4af33]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#d4af33] text-white font-semibold py-2 rounded-md hover:bg-[#b38f2d] transition-colors"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
