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
        alert("You Have Sign Up Successfully!!!");
        console.log(data);
      })
      .catch((err) => console.log("error", err));

    setData({ username: "", password: "" });
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-white to-gray-100 flex items-center justify-center px-4 py-8 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-md
          bg-white
          border border-gray-100
          rounded-2xl
          shadow-xl
          p-5
          sm:p-7
          md:p-8
          space-y-5
        "
      >
        <div className="text-center mb-2">
          <h2
            className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-extrabold
            text-gray-800
          "
          >
            Create Account
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Join HKrt and start shopping today
          </p>

          <div className="w-12 sm:w-16 h-1 bg-[#d4af33] rounded-full mx-auto mt-3" />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="username"
            className="
              text-sm
              sm:text-base
              text-gray-700
              font-semibold
            "
          >
            Username
          </label>

          <input
            type="text"
            autoComplete="off"
            name="username"
            placeholder="Enter First Name & Last Two Digit Phone no"
            className="
              w-full
              border border-gray-300
              text-gray-700
              bg-gray-50
              rounded-xl
              px-4
              py-3
              text-sm
              sm:text-base
              outline-none
              placeholder:text-gray-400
              focus:bg-white
              focus:border-[#d4af33]
              focus:ring-2
              focus:ring-[#d4af33]/20
              transition-all
              duration-200
            "
            value={data.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="
              text-sm
              sm:text-base
              text-gray-700
              font-semibold
            "
          >
            Password
          </label>

          <input
            type="password"
            autoComplete="off"
            name="password"
            placeholder="Enter your password"
            className="
              w-full
              border border-gray-300
              text-gray-700
              bg-gray-50
              rounded-xl
              px-4
              py-3
              text-sm
              sm:text-base
              outline-none
              placeholder:text-gray-400
              focus:bg-white
              focus:border-[#d4af33]
              focus:ring-2
              focus:ring-[#d4af33]/20
              transition-all
              duration-200
            "
            value={data.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="
            w-full
            bg-[#d4af33]
            text-white
            font-bold
            py-3
            rounded-xl
            shadow-md
            text-sm
            sm:text-base
            hover:bg-[#b38f2d]
            hover:shadow-lg
            hover:-translate-y-0.5
            active:scale-[0.98]
            transition-all
            duration-200
          "
        >
          Sign Up
        </button>

        {/* Bottom Text */}
        <p className="text-center text-xs sm:text-sm text-gray-500 pt-1">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="
              text-[#d4af33]
              font-semibold
              hover:text-[#a7830f]
              hover:underline
              transition-colors
            "
          >
            Log In
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
