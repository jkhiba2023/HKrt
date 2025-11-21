import React, { useState } from "react";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save signup data
    localStorage.setItem("signupData", JSON.stringify(data));

    alert("Registration Successful!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white w-[400px] p-6 rounded-lg shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          New Registration
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
            placeholder="Enter First Name & Last Two Digit Phone no"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#d4af33]"
            value={data.username}
            onChange={handleChange}
            required
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
            value={data.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label
            htmlFor="confirmPassword"
            className="mb-1 text-gray-700 font-medium"
          >
            Re-Enter Password
          </label>
          <input
            type="password"
            autoComplete="off"
            name="confirmPassword"
            placeholder="Re-Enter your password"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#d4af33]"
            value={data.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#d4af33] text-white font-semibold py-2 rounded-md hover:bg-[#b38f2d] transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
