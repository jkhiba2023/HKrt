import React from "react";
import logo from "../../assets/HK.png";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 border-b bg-[#ffffff] border-[#d4af33] px-4 mx-auto">
      {/* Logo on extreme left */}
      <Link to="/">
        <img src={logo} alt="" className="w-[120px] h-[50px]" />
      </Link>
      {/* Search bar to search the product */}
      <input
        type="text"
        autoComplete="off"
        className=" border-2 border-[#d4af33] text-[#d4af33] px-4 py-2 rounded-xl w-[500px]"
        placeholder="Search for products"
      />

      {/* Navigation links on right */}
      <ul className="flex items-center gap-5 text-[#d4af33] cursor-pointer">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Product</li>
        </Link>

        <Link to="/login">
          <li className="bg-[#d4af33] text-[#FFFFFF] px-6 py-2 rounded-3xl">
            Log In
          </li>
        </Link>
        <li className="flex items-center">
          <BsCart4 size={30} />
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
