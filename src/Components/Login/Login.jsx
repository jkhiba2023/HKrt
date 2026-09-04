import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://e-commerce-backened-4fih.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        localStorage.setItem("username", data.username);
        console.log(data);
        navigate("/");
      })
      .catch((err) => {
        console.log("error", err);
      });

    console.log(user);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-white to-gray-100 flex items-center justify-center px-4 py-8">
      {/* Login Card */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-xl p-5 sm:p-7 md:p-8 space-y-5"
      >
        {/* Heading */}
        <div className="text-center mb-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
            Welcome Back
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Login to continue shopping with HKrt
          </p>

          <div className="w-12 h-1 bg-[#d4af33] rounded-full mx-auto mt-3" />
        </div>

        {/* Username */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="username"
            className="text-sm sm:text-base text-gray-700 font-semibold"
          >
            Username
          </label>

          <input
            type="text"
            autoComplete="off"
            name="username"
            placeholder="Enter your username/email ID"
            className="w-full border border-gray-300 text-gray-700 rounded-xl px-4 py-3 text-sm sm:text-base bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af33]/50 focus:border-[#d4af33] transition-all duration-200"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="text-sm sm:text-base text-gray-700 font-semibold"
          >
            Password
          </label>

          <input
            type="password"
            autoComplete="off"
            name="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 text-gray-700 rounded-xl px-4 py-3 text-sm sm:text-base bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af33]/50 focus:border-[#d4af33] transition-all duration-200"
            value={user.password}
            onChange={handleChange}
            required
          />

          {/* Forgot / Signup */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-1">
            <button
              type="button"
              className="text-xs sm:text-sm text-gray-500 hover:text-[#d4af33] transition-colors text-left"
            >
              Forgot your password?
            </button>

            <Link
              to="/signup"
              className="text-xs sm:text-sm text-[#b38f2d] font-semibold hover:text-[#8f701d] transition-colors"
            >
              Create New Account
            </Link>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-[#d4af33] text-white font-bold py-3 rounded-xl shadow-md hover:bg-[#b38f2d] hover:shadow-lg active:scale-[0.98] transition-all duration-200 text-sm sm:text-base"
        >
          Log In
        </button>

        {/* Bottom Text */}
        <p className="text-center text-xs sm:text-sm text-gray-500 pt-1">
          New to HKrt?{" "}
          <Link
            to="/signup"
            className="text-[#d4af33] font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
