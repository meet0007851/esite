import React from "react";
import { FaCircle } from "react-icons/fa";

function Hero({ heroData, heroCount, setHeroCount }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
      {/* Hero Text */}
      <div>
        <p className="text-[#88d9ee] font-semibold text-lg sm:text-2xl md:text-4xl lg:text-5xl tracking-wide drop-shadow-md transition-all duration-700 ease-in-out">
          {heroData.text1}
        </p>
        <p className="text-white font-bold text-xl sm:text-3xl md:text-5xl lg:text-6xl mt-3 md:mt-5 tracking-tight transition-all duration-700 ease-in-out">
          {heroData.text2}
        </p>

        {/* CTA Button */}
        <button className="mt-6 sm:mt-8 px-6 py-3 rounded-2xl bg-orange-400 text-white font-semibold text-sm sm:text-lg shadow-lg hover:bg-orange-500 transition-all">
          Shop Now
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-3 mt-8 md:mt-12">
        {[0, 1, 2, 3].map((index) => (
          <FaCircle
            key={index}
            className={`w-3 h-3 md:w-4 md:h-4 cursor-pointer transition-all duration-300 ${
              heroCount === index
                ? "fill-orange-400 scale-110"
                : "fill-white/60 hover:fill-white"
            }`}
            onClick={() => setHeroCount(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
