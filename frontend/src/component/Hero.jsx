import React from "react";
import { FaCircle } from "react-icons/fa";

function Hero({ heroData, heroCount, setHeroCount }) {
  return (
    <div className="w-[40%] h-[100%] relative">
      {/* Text */}
      <div className="absolute text-[#88d9ee] text-[20px] md:text-[40px] lg:text-[55px] md:left-[10%] md:top-[90px] lg:top-[130px] left-[10%] top-[10px]">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      {/* Dots */}
      <div className="absolute md:top-[400px] lg:top-[500px] top-[160px] left-[10%] flex items-center justify-center gap-[10px]">
        {[0, 1, 2, 3].map((index) => (
          <FaCircle
            key={index}
            className={`w-[14px] cursor-pointer ${
              heroCount === index ? "fill-orange-400" : "fill-white"
            }`}
            onClick={() => setHeroCount(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
