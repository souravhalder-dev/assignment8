import React from "react";
import playStoreimg from "./../../assets/fi_16076057.png";
import AppleStoreimg from "./../../assets/fi_5977575.png";
import { Link } from "react-router";
const TextBanner = () => {
  return (
    <div className="px-[80px] flex-row justify-center items-center text-center pt-[80px] bg-gray-100">
      <h1 className="text-[72px]">
        We Build <br />{" "}
        <span className="font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-gray-400 mt-4">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting . <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <div className=" mt-10  flex justify-center items-center">
        <Link to={"https://play.google.com/"}>
          <button className="cursor-pointer w-[200px] gap-2 text-center flex px-7 py-3 font-bold h-[56px]  ml-3 border border-[rgba(210,210,210,1)] rounded-md">
            <img
              className="w-8 h-8 justify-self-center "
              src={playStoreimg}
              alt=""
            />{" "}
            Google Play
          </button>
        </Link>
        <Link to={"https://www.apple.com/store"}>
          <button className=" cursor-pointer w-[200px] gap-2 text-center flex px-10 py-3 font-bold h-[56px]  ml-3 border border-[rgba(210,210,210,1)] rounded-md">
            <img
              className=" w-8 h-8  justify-self-center  "
              src={AppleStoreimg}
              alt=""
            />{" "}
            <p>App Store</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TextBanner;
