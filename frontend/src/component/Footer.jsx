import React from "react";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <div className="w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px]">
      <div className="w-[100%] md:h-[30vh] h-[15vh] md:mb-[0px] bg-[#dbfcfcec] flex items-center justify-center md:px-[50px] px-[5px]">
        <div className="md:w-[35%] w-[35%] h-[100%] flex items-start justify-center flex-col gap-[5px]">
          <div className="flex items-start justify-start gap-[5px] mt-[10px] md:mt-[40px]">
            <img
              src={logo}
              alt=""
              className="md:w-[60px] md:h-[30px] w-[10px] h-[30px]"
            />
           
           <p className="text-[19px] md:text-[20px] text-[black]">OneCart</p>
          </div>
            <p className="text-[15px] text-[#1e2223] hidden md:block">
              OneCart is your all-in-one online shopping destination, offering
              top-quality products, unbeatable deals, and fast delivery—all
              backed by trusted service designed to make your life easier.
            </p>
            <p className="text-[15px] text-[#1e2223] flex md:hidden">Fast.
            Easy. Reliable. OneCart Shopping</p>
        </div>
        <div
          className="md:w-[25%] w-[30%] h-[100%] flex
  items-center justify-center flex-col text-center"
        >
          <div
            className="flex items-center
    justify-center gap-[5px] mt-[10px] md:mt-[40px]
    "
          >
            <p
              className="text-[19px] md:text-[20px]
    ☐text-[#1e2223] font-sans "
            >
              COMPANY
            </p>
          </div>

          <ul>
            <li
              className="text-[15px] ☐text-
[#1e2223] hidden md:block
cursor-pointer"
            >
              Home
            </li>
            <li
              className="text-[15px] ☐text-[#1e2223]
cursor-pointer "
            >
              About us
            </li>
            <li
              className="text-[15px] ☐text-[#1e2223]
hidden md:block cursor-pointer"
            >
              Delivery
            </li>
            <li
              className="text-[15px] ☐text-[#1e2223]
cursor-pointer"
            >
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="w-[40%] h-[100%] flex items-center justify-center flex-col">
              <div
            className="flex items-center
    justify-center gap-[5px] mt-[10px] md:mt-[40px]
    "
          >
            <p
              className="text-[19px] md:text-[20px]
    ☐text-[#1e2223] font-sans "
            >
              GET IN TOUCH
            </p>
          </div>
             <ul>
            <li
              className="text-[15px] ☐text-
[#1e2223] hidden md:block
cursor-pointer"
            >
              +91-9890990900
            </li>
            <li
              className="text-[15px] ☐text-[#1e2223]
cursor-pointer "
            >
              admin12@onecart.com
            </li>
            <li
              className="text-[15px] ☐text-[#1e2223]
hidden md:block cursor-pointer"
            >
              +91-9239983333
            </li>
            <li
              className="text-[15px] ☐text-[#1e2223]
cursor-pointer"
            >
                onecart@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-slate-400"></div>
      <div className="w-[100%] h-[5vh] bg-[#dbfcfcec] flex items-center justify-center">Copyright 2025@onecart. com-All Right Reserved</div>

    </div>
  );
}

export default Footer;
