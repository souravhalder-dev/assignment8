import React from "react";
import heroImg from "./../../assets/hero.png";
const Banner = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <img
        className="w-full max-w-4xl object-contain"
        src={heroImg}
        alt="Hero"
      />

      <div className="w-full px-4 sm:px-10 md:px-20 lg:px-32  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-16 flex flex-col items-center rounded-xl">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
          Trusted by Millions, Built for You
        </h1>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 sm:gap-20 w-full">
          <div className="flex flex-col items-center">
            <p className="text-white text-lg sm:text-xl">Total Downloads</p>
            <h1 className="text-white font-bold text-3xl sm:text-5xl">29.6M</h1>
            <p className="text-white text-sm sm:text-base mt-1">
              21% more than last month
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-white text-lg sm:text-xl">Total Reviews</p>
            <h1 className="text-white font-bold text-3xl sm:text-5xl">906K</h1>
            <p className="text-white text-sm sm:text-base mt-1">
              46% more than last month
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-white text-lg sm:text-xl">Active Apps</p>
            <h1 className="text-white font-bold text-3xl sm:text-5xl">132+</h1>
            <p className="text-white text-sm sm:text-base mt-1">
              31 more will Launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
