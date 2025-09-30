import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegRectangleList } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from "react-router-dom";
function Sidebar() {
    let navigate = useNavigate()
  return (
    <div className="w-[18%] min-h-[100vh] border-r-[1px] py-[60px] fixed left-0 top-0">
      <div className="flex flex-col gap-4 pt-[40px] pl-[20%] text-[15px]">
     
        <div className="flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 cursor-pointer py-2 hover:bg-[#2b7b89]" onClick={()=>navigate("/add")}>
          <IoIosAddCircleOutline  className="w-[20px] h-[20px]"/>
        <p className="hidden md:block">Add item</p>
        </div>
        
        <div className="flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 cursor-pointer py-2 hover:bg-[#2b7b89]" onClick={()=>navigate("/list")}>
          <FaRegRectangleList  className="w-[20px] h-[20px]"/>
        <p className="hidden md:block">list item</p>
        </div>
     
        <div className="flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 cursor-pointer py-2 hover:bg-[#2b7b89]" onClick={()=>navigate("/order")}>
          <SiTicktick  className="w-[20px] h-[20px]"/>
        <p className="hidden md:block">view orders</p>
        </div>
     
      </div>
    </div>
  );
}

export default Sidebar;
