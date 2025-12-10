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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white w-[400px] p-6 rounded-lg shadow-lg space-y-4"
      >
        <h2 className="lg:text-3xl md:text-2xl text-lg font-semibold text-center text-gray-800">
          Login
        </h2>

        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 text-gray-700 font-medium">
            Username
          </label>
          <input
            type="text"
            autoComplete="off"
            name="username"
            placeholder="Enter your username/email ID"
            className="border border-gray-300 text-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#d4af33]"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 text-gray-700 font-medium">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            placeholder="Enter your password"
            className="border border-gray-300 text-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#d4af33]"
            value={user.password}
            onChange={handleChange}
            required
          />
          <div className="flex justify-center items-center mt-3">
            <p className="text-xs pr-1">Forgot your password?</p>
            <Link to={"/signup"}>
              <span className="text-xs text-blue-700">
                Sign up for new Customer!!!!
              </span>
            </Link>
          </div>
        </div>

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
