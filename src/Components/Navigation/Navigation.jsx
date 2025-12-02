import React, { useEffect, useState } from "react";
import logo from "../../assets/HK.png";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosLogOut } from "react-icons/io";

const Navigation = () => {
  const [userName, setuserName] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("username");
    setuserName(userName);
  }, [userName]);

  const handleLogOut = () => {
    localStorage.removeItem("username");
    setuserName("");
    navigator("/login");
  };

  const quantity = useSelector((state) => state.cartQuantity);

  console.log("username", userName);
  return (
    <div className="flex justify-between items-center w-full h-20 border-b bg-[#ffffff] border-[#d4af33] px-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="" className="w-[120px] h-[50px]" />
      </Link>

      <input
        type="text"
        autoComplete="off"
        className=" border-2 border-[#d4af33] text-[#d4af33] px-4 py-2 rounded-xl w-[500px]"
        placeholder="Search for products"
      />

      <ul className="flex items-center gap-5 text-[#d4af33] cursor-pointer">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Product</li>
        </Link>

        <Link to="/login">
          <li className="bg-[#d4af33] text-[#FFFFFF] px-6 py-2 rounded-3xl">
            {userName ? userName : "Log In"}
          </li>
        </Link>

        {userName && (
          <li className="bg-[#d4af33] text-[#FFFFFF] px-6 py-2 rounded-3xl">
            {userName && (
              <button
                onClick={handleLogOut}
                className="flex justify-center items-center"
              >
                <IoIosLogOut size={22} />
              </button>
            )}
          </li>
        )}

        <Link to="/cart">
          <li className="flex items-center">
            <BsCart4 size={30} />
            {quantity}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
