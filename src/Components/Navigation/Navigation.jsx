import React, { useEffect, useState } from "react";
import logo from "../../assets/HK.png";
import { BsCart4 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { IoIosLogOut, IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navigation = () => {
  const [userName, setUserName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const cartValue = useSelector((state) => state.cart.cartCount);

  useEffect(() => {
    const username = localStorage.getItem("username");
    setUserName(username || "");
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleNavigation = (link) => {
    navigate(link);
    setIsOpen(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("username");
    setUserName("");
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#d4af33] shadow-sm">
        <div className="relative max-w-7xl mx-auto min-h-16 sm:min-h-[72px] md:min-h-20 px-3 sm:px-5 md:px-8 flex items-center">
          {/* ================= LOGO ================= */}

          <Link to="/" className="shrink-0 flex items-center group">
            <img
              src={logo}
              alt="HK Logo"
              className="
                w-[78px] h-[40px]
                sm:w-[95px] sm:h-[45px]
                md:w-[110px] md:h-[50px]
                object-contain
                transition-transform duration-300
                group-hover:scale-105
              "
            />
          </Link>

          {/* ================= SEARCH ================= */}

          <div className="hidden sm:flex flex-1 justify-center px-4 md:px-8">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                autoComplete="off"
                placeholder="Search for products..."
                className="
                  w-full
                  h-10 sm:h-11 md:h-12
                  border border-[#d4af33]
                  bg-gray-50
                  text-gray-700
                  px-4 pr-10
                  rounded-full
                  outline-none
                  text-sm md:text-base
                  placeholder:text-gray-400
                  focus:bg-white
                  focus:border-[#b99322]
                  focus:ring-2
                  focus:ring-[#d4af33]/20
                  transition-all duration-200
                "
                value={search}
                onChange={() => setSearch((e) => e.target.value)}
              />
            </div>
          </div>

          {/* ================= DESKTOP NAV ================= */}

          <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-[#8f701d] font-medium">
            <Link
              to="/"
              className="
                relative py-2
                hover:text-[#d4af33]
                transition-colors duration-200
                after:absolute
                after:left-0
                after:bottom-0
                after:w-0
                after:h-[2px]
                after:bg-[#d4af33]
                hover:after:w-full
                after:transition-all
                after:duration-300
              "
            >
              Home
            </Link>

            <Link
              to="/products"
              className="
                relative py-2
                hover:text-[#d4af33]
                transition-colors duration-200
                after:absolute
                after:left-0
                after:bottom-0
                after:w-0
                after:h-[2px]
                after:bg-[#d4af33]
                hover:after:w-full
                after:transition-all
                after:duration-300
              "
            >
              Products
            </Link>

            <Link
              to="/login"
              className="
                bg-[#d4af33]
                text-white
                px-4 xl:px-5
                py-2
                rounded-full
                whitespace-nowrap
                shadow-sm
                hover:bg-[#b99322]
                hover:shadow-md
                hover:-translate-y-0.5
                transition-all duration-200
              "
            >
              {userName || "Log In"}
            </Link>

            {userName && (
              <button
                onClick={handleLogOut}
                aria-label="Logout"
                className="
                  w-10 h-10
                  bg-[#d4af33]
                  text-white
                  rounded-full
                  flex items-center justify-center
                  shadow-sm
                  hover:bg-[#b99322]
                  hover:scale-105
                  transition-all duration-200
                "
              >
                <IoIosLogOut size={21} />
              </button>
            )}
          </div>

          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            {/* ================= HAMBURGER ================= */}

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="
                sm:hidden
                w-10 h-10
                rounded-full
                flex items-center justify-center
                text-[#d4af33]
                hover:bg-amber-50
                active:scale-95
                transition-all duration-200
              "
            >
              <IoMdMenu size={30} />
            </button>

            {/* ================= CART ================= */}

            <Link
              to="/cart"
              className="
                relative
                w-10 h-10
                sm:w-11 sm:h-11
                rounded-full
                flex items-center justify-center
                text-[#d4af33]
                hover:bg-amber-50
                hover:scale-105
                transition-all duration-200
              "
            >
              <BsCart4 size={25} className="sm:w-7 sm:h-7" />

              {cartValue > 0 && (
                <span
                  className="
                    absolute
                    -top-1
                    -right-1
                    min-w-[19px]
                    h-[19px]
                    px-1
                    rounded-full
                    bg-red-500
                    text-white
                    text-[10px]
                    font-bold
                    flex items-center justify-center
                    border-2 border-white
                  "
                >
                  {cartValue}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-gradient-to-br from-amber-950 via-amber-900 to-gray-950 text-white">
          {/* CLOSE BUTTON */}

          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="
              absolute
              right-4 top-4
              w-11 h-11
              sm:w-12 sm:h-12
              rounded-full
              bg-[#d4af33]
              flex items-center justify-center
              shadow-lg
              hover:bg-[#b99322]
              hover:rotate-90
              transition-all duration-300
            "
          >
            <IoClose size={28} />
          </button>

          {/* LOGIN */}

          <div className="absolute left-4 sm:left-6 top-4 sm:top-5">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="
                inline-flex
                bg-[#d4af33]
                text-white
                px-4 sm:px-5
                py-2
                rounded-full
                text-sm sm:text-base
                font-semibold
                shadow-md
                hover:bg-[#b99322]
                transition-all duration-200
              "
            >
              {userName || "Log In"}
            </Link>
          </div>

          {/* MENU ITEMS */}

          <div className="h-full flex items-center justify-center px-4">
            <div className="flex flex-col items-center gap-5 sm:gap-7 text-lg sm:text-xl font-medium">
              {/* HOME */}

              <button
                onClick={() => handleNavigation("/")}
                className="
                  w-48 sm:w-56
                  py-3
                  rounded-xl
                  hover:bg-white/10
                  hover:text-[#d4af33]
                  transition-all duration-200
                "
              >
                Home
              </button>

              {/* PRODUCTS */}

              <button
                onClick={() => handleNavigation("/products")}
                className="
                  w-48 sm:w-56
                  py-3
                  rounded-xl
                  hover:bg-white/10
                  hover:text-[#d4af33]
                  transition-all duration-200
                "
              >
                Products
              </button>

              {/* CART */}

              <button
                onClick={() => handleNavigation("/cart")}
                className="
                  w-48 sm:w-56
                  py-3
                  rounded-xl
                  flex items-center justify-center gap-3
                  hover:bg-white/10
                  hover:text-[#d4af33]
                  transition-all duration-200
                "
              >
                <BsCart4 size={24} />

                <span>Cart</span>

                {cartValue > 0 && (
                  <span
                    className="
                      min-w-5
                      h-5
                      px-1
                      rounded-full
                      bg-red-500
                      text-white
                      text-xs
                      flex items-center justify-center
                      font-bold
                    "
                  >
                    {cartValue}
                  </span>
                )}
              </button>

              {/* LOGOUT */}

              {userName && (
                <button
                  onClick={handleLogOut}
                  className="
                    mt-2
                    w-48 sm:w-56
                    flex items-center justify-center
                    gap-2
                    bg-[#d4af33]
                    text-white
                    px-6
                    py-3
                    rounded-full
                    shadow-md
                    hover:bg-[#b99322]
                    hover:scale-105
                    transition-all duration-200
                  "
                >
                  <IoIosLogOut size={22} />
                  Logout
                </button>
              )}
            </div>
          </div>

          {/* SLOGAN */}

          <p
            className="
              absolute
              bottom-5
              left-0
              right-0
              text-center
              text-xs sm:text-sm
              text-white/50
            "
          >
            Shop smart. Shop better.
          </p>
        </div>
      )}
    </>
  );
};

export default Navigation;
