import React, { useEffect, useState } from "react";
import logo from "../../assets/HK.png";
import { BsCart4 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosLogOut, IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navigation = () => {
  const [userName, setuserName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userName = localStorage.getItem("username");
    setuserName(userName);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleNavigation = (link) => {
    if (link) {
      navigate(link);
      setIsOpen(!isOpen);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("username");
    setuserName("");
    navigator("/login");
  };

  const quantity = useSelector((state) => state.cartQuantity);

  console.log("username", userName);
  return (
    <div className="flex gap-2 relative justify-between items-center w-full h-20 border-b bg-[#ffffff] border-[#d4af33] px-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="" className="w-[120px] h-[50px] md:w-[100px]" />
      </Link>

      <input
        type="text"
        autoComplete="off"
        className=" border-2 border-[#d4af33] text-[#d4af33] px-4 py-2 rounded-xl w-1/2"
        placeholder="Search for products"
      />

      <ul className=" hidden items-center gap-5 lg:flex text-[#d4af33] cursor-pointer">
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
          <li className="flex justify-center relative">
            <BsCart4 size={30} />
            <p className="absolute bottom-2.5 font-bold text-amber-600">
              {quantity}
            </p>
          </li>
        </Link>
      </ul>
      <Link to="/cart" className="lg:hidden">
        <li className="flex justify-center relative">
          <BsCart4 size={30} className="text-[#d4af33]" />
          <p className="absolute bottom-2.5 font-bold text-amber-600">
            {quantity}
          </p>
        </li>
      </Link>
      <IoMdMenu
        className="lg:hidden text-[#d4af33]"
        size={32}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute right-0 top-0 bg-amber-900 h-screen w-full flex items-center justify-center opacity-80">
          <IoClose
            className="absolute right-3 top-5 bg-[#d4af33]/80 rounded-full p-2 text-white font-extrabold"
            size={42}
            onClick={() => setIsOpen(!isOpen)}
          />
          <Link to="/login" className="items-center absolute left-3 top-5">
            <button className="bg-[#d4af33]/90 text-[#FFFFFF] px-5 py-2 rounded-3xl">
              {userName ? userName : "Log In"}
            </button>
          </Link>
          <ul className=" flex items-center flex-col justify-center gap-1 lg:flex text-[#d4af33] cursor-pointer mx-auto">
            {/* <Link to="/" > */}
            <li onClick={() => handleNavigation("/")}>Home</li>
            {/* </Link> */}
            <li onClick={() => handleNavigation("/products")}>Product</li>

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
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
