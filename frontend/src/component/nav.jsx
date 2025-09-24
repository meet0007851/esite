import React,{userContext} from "react";
import logo from "../assets/logo.png";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import {userDataContext} from "../context/userContext"
function Nav() {
  let {userData} = userContext(userDataContext)
  return (
    <nav className="w-full h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-6 shadow-md shadow-black">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="logo"
          className="w-[45px] hover:scale-105 transition-transform"
        />
        <h1 className="text-2xl font-bold text-black font-sans tracking-wide">
          OneCart
        </h1>
      </div>

      {/* Menu Section */}
      <ul className="hidden md:flex items-center justify-center gap-5">
        <li className="text-sm font-medium text-white bg-black/80 px-5 py-2 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-black hover:shadow-md hover:scale-105">
          HOME
        </li>
        <li className="text-sm font-medium text-white bg-black/80 px-5 py-2 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-black hover:shadow-md hover:scale-105">
          COLLECTION
        </li>
        <li className="text-sm font-medium text-white bg-black/80 px-5 py-2 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-black hover:shadow-md hover:scale-105">
          ABOUT
        </li>
        <li className="text-sm font-medium text-white bg-black/80 px-5 py-2 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-black hover:shadow-md hover:scale-105">
          CONTACT
        </li>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-5 relative">
        <IoSearchCircleOutline className="w-9 h-9 cursor-pointer text-black hover:text-gray-700 transition-colors" />

        <div className="relative">
          <MdOutlineShoppingCart className="w-7 h-7 cursor-pointer text-black hover:text-gray-700 transition-colors" />
          <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] px-1.5 py-0.5 rounded-full flex items-center justify-center">
            10
          </span>
        </div>

        <FaUserCircle className="w-8 h-8 cursor-pointer text-black hover:text-gray-700 transition-colors" />
      </div>
    </nav>
  );
}

export default Nav;
