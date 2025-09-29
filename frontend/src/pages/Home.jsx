import React, { useEffect, useState } from "react";
import BackGround from "../component/BackGround";
import Hero from "../component/Hero";

function Home() {
  const heroData = [
    { text1: "30% off limited offer", text2: "style that" },
    { text1: "discover the best bold fashion", text2: "limited time only" },
    { text1: "explore over best collection", text2: "shop now" },
    { text1: "choose your perfect fashion fit", text2: "now on sale" },
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interVal = setInterval(() => {
      setHeroCount((prevCount) => (prevCount === 3 ? 0 : prevCount + 1));
    }, 3000);
    return () => clearInterval(interVal);
  }, []);

  return (
    <div className="overflow-x-hidden top-[70px] relative">
      <div className="w-[100vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh] bg-gradient-to-l from-[#141414] to-[#0c2025]">
        <BackGround heroCount={heroCount} />
        <Hero
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          heroData={heroData[heroCount]}
        />
      </div>
    </div>
  );
}

export default Home;
