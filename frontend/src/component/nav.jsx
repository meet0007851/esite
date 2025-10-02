import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchCircle } from "react-icons/io5";
import { userDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { authDataContext } from "../context/authContext";
import { MdContacts } from "react-icons/md";
import { HiOutlineCollection } from "react-icons/hi";
import axios from "axios";
function Nav() {
  let { getCurrentUser, userData } = useContext(userDataContext);
  let { serverUrl } = useContext(authDataContext);
  let [showSearch, setShowSearch] = useState(false);
  let [showProfile, setShowProfile] = useState(false);
  
  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(result.data);
      getCurrentUser();
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="w-full h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-6 shadow-md shadow-black">
      {/* Logo Section */}
      <div className="w-[20%] lg:w-[30%] flex items-center gap-3">
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
      <div className="w-[50%] lg:w-[40%]hidden md:flex">
        <ul className="hidden md:flex items-center  justify-center gap-5">
          <li className="text-sm font-medium text-white bg-black/80 px-5 py-2 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-black hover:shadow-md hover:scale-105" onClick={()=>navigate("/")}>
            HOME
          </li>
          <li className="text-sm font-medium text-white bg-black/80 px-5 py-2 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-black hover:shadow-md hover:scale-105" onClick={()=>navigate("/collection")}>
            COLLECTION
          </li>
          <li className="text-sm font-medium text-white bg-black/80 px-5 py-2 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-black hover:shadow-md hover:scale-105" onClick={()=>navigate("/about")}>
            ABOUT
          </li>
          <li className="text-sm font-medium text-white bg-black/80 px-5 py-2 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-black hover:shadow-md hover:scale-105" onClick={()=>navigate("/contact")}>
            CONTACT
          </li>
        </ul>
      </div>
      {/* Icons Section */}
      <div className="flex items-center gap-5 relative">
        {!showSearch && (
          <IoSearchCircleOutline
            onClick={() => setShowSearch((prev) => !prev)}
            className="w-9 h-9 cursor-pointer  text-black hover:text-gray-700 transition-colors"
          />
        )}
        {showSearch && (
          <IoSearchCircle
            onClick={() => setShowSearch((prev) => !prev)}
            className="w-9 h-9 cursor-pointer  text-black hover:text-gray-700 transition-colors "
          />
        )}

        {!userData ? (
          <FaUserCircle
            className="w-8 h-8  text-black hover:text-gray-700 transition-colors cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          />
        ) : (
          <div
            className="w-[30px] h-[30px] cursor-pointer text-white bg-[#080808] rounded-full flex items-center justify-center"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            {userData?.name ? userData.name.slice(0, 1).toUpperCase() : "?"}
          </div>
        )}
        <div className="relative">
          <MdOutlineShoppingCart className="w-7 h-7 cursor-pointer text-black hover:text-gray-700 transition-colors hidden md:block" />
          <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] px-1.5 py-0.5 rounded-full flex items-center hidden md:block justify-center">
            10
          </span>
        </div>
      </div>
      {showSearch && (
        <div className=" w-[100%] h-[60px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center">
          <input
            type="text"
            className="lg:w-[50%] w-[80%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[white] text-[18px]"
            placeholder="search here"
          />
        </div>
      )}
      {showProfile && (
        <div className="absolute  w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10">
          <ul className="w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-[white]">
            {!userData && (
              <li
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer "
                onClick={() => {
                  navigate("/login");
                }}
              >
                 
                Login
              </li>
            )}
            {userData && (
              <li
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer "
                onClick={() => {
                  handleLogout();setShowProfile(false)
                }}
              >
                 
                Logout
              </li>
            )}
            <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer ">
              
              Orders
            </li>
            <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer " 
             onClick={() => {
                  ()=>navigate("/about");setShowProfile(false)
                }}
             >
            
              About
            </li>
          </ul>
        </div>
      )}
     <div className="w-[100vw] h-[90px] fixed bottom-0 text-[12px] left-0 bg-[#191818] md:hidden flex items-center justify-between px-[20px]">
  <button className="text-white flex items-center justify-center flex-col gap-[2px]" onClick={()=>navigate("/")}> 
    <IoMdHome className="w-[28px] h-[28px] text-white" />
    Home
  </button>
  <button className="text-white flex items-center justify-center flex-col gap-[2px]" onClick={()=>navigate("/collection")}>
    <MdContacts className="w-[28px] h-[28px] text-white" />
    Collection
  </button>
  <button className="text-white flex items-center justify-center flex-col gap-[2px]" onClick={()=>navigate("/contact")}>
    <HiOutlineCollection className="w-[28px] h-[28px] text-white" />
    Contact
  </button>
  <button className="text-white flex items-center justify-center flex-col gap-[2px]" >
    <MdOutlineShoppingCart className="w-[28px] h-[28px] text-white" />
    Cart
  </button>
  <p className=" absolute h-[18px] w-[18px] flex items-center justify-center bg-white px-[5px] py-[2px] text-black font-semibold  rounded-full text-[9px] top-[8px] right-[18px]">10</p>
</div>

    </nav>
  );
}

export default Nav;
