import React from "react";
import Title from "./Title";
import { RiExchangeFundsFill } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import logo from "../assets/logo.png"; // ✅ make sure this path is correct

function OurPolicy() {
  return (
    <div className="w-full min-h-screen md:h-[70vh] flex flex-col items-center justify-start bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[40px]  ">
      
      {/* Logo and Title */}
      <div className="text-center mt-[50px] flex flex-col items-center gap-[10px]">
        <img
          src={logo}
          alt="Brand Logo"
          className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain"
        />
        <Title text1="OUR" text2="POLICY" />
        <p className="text-[12px] md:text-[17px] px-[15px] text-blue-100 max-w-[600px]">
          Customer-Friendly Policies Committed to Your Satisfaction and Safety.
        </p>
      </div>

      {/* Policy Cards */}
      <div className="flex flex-wrap justify-center items-center gap-[35px] md:gap-[60px] w-full md:min-h-[50%]">
        {/* Exchange Policy */}
        <div className="w-[350px] max-w-[90%] flex flex-col items-center gap-[8px] text-center">
          <RiExchangeFundsFill
            aria-label="Exchange policy icon"
            className="text-[#90b9ff] w-[28px] h-[28px] md:w-[50px] md:h-[50px]"
          />
          <p className="font-semibold md:text-[22px] text-[17px] text-[#a5e8f7]">
            Easy Exchange Policy
          </p>
          <p className="font-medium md:text-[15px] text-[11px] text-[aliceblue]">
            Exchange made easy — quick, simple, and customer-friendly process.
          </p>
        </div>

        {/* Return Policy */}
        <div className="w-[350px] max-w-[90%] flex flex-col items-center gap-[8px] text-center">
          <TbRosetteDiscountCheckFilled
            aria-label="Return policy icon"
            className="text-[#90b9ff] w-[28px] h-[28px] md:w-[50px] md:h-[50px]"
          />
          <p className="font-semibold md:text-[22px] text-[17px] text-[#a5e8f7]">
            7 Days Return Policy
          </p>
          <p className="font-medium md:text-[15px] text-[11px] text-[aliceblue]">
            Shop with confidence — 7 days easy return guarantee.
          </p>
        </div>

        {/* Support Policy */}
        <div className="w-[350px] max-w-[90%] flex flex-col items-center gap-[8px] text-center">
          <BiSupport
            aria-label="Customer support icon"
            className="text-[#90b9ff] w-[28px] h-[28px] md:w-[50px] md:h-[50px]"
          />
          <p className="font-semibold md:text-[22px] text-[17px] text-[#a5e8f7]">
            Best Customer Support
          </p>
          <p className="font-medium md:text-[15px] text-[11px] text-[aliceblue]">
            Trusted customer support — your satisfaction is our priority.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurPolicy;
