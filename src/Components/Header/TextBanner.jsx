import React from "react";
import playStoreimg from "./../../assets/fi_16076057.png";
import AppleStoreimg from "./../../assets/fi_5977575.png";
import { Link } from "react-router";
const TextBanner = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-32 flex flex-col justify-center items-center text-center pt-20 bg-gray-100">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight">
        We Build <br />{" "}
        <span className="font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>

      <p className="text-gray-400 mt-4 text-base sm:text-lg md:text-xl max-w-3xl">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
        <Link to="https://play.google.com/">
          <button className="bg-white cursor-pointer flex items-center justify-center gap-2 w-full sm:w-48 px-5 py-3 font-bold h-14 border border-gray-300 rounded-md hover:shadow-lg transition">
            <img className="w-8 h-8" src={playStoreimg} alt="Google Play" />
            Google Play
          </button>
        </Link>

        <Link to="https://www.apple.com/store">
          <button className="bg-white flex cursor-pointer items-center justify-center gap-2 w-full sm:w-48 px-5 py-3 font-bold h-14 border border-gray-300 rounded-md hover:shadow-lg transition">
            <img className="w-8 h-8 " src={AppleStoreimg} alt="App Store" />
            App Store
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TextBanner;
