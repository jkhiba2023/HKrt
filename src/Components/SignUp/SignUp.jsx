import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://e-commerce-backened-4fih.onrender.com/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.log("error", err));

    setData({ username: "", password: "" });
    navigate("/login");
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

        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 text-gray-700 font-medium">
            Username
          </label>
          <input
            type="text"
            autoComplete="off"
            name="username"
            placeholder="Enter First Name & Last Two Digit Phone no"
            className="border border-gray-300 text-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#d4af33]"
            value={data.username}
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
            value={data.password}
            onChange={handleChange}
            required
          />
        </div>

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
