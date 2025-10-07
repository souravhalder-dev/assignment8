import React from "react";
import heroImg from "./../../assets/hero.png";
const Banner = () => {
  return (
    <div className="mt-10 flex-col justify-center items-center ">
      <img className="justify-self-center " src={heroImg} alt="" />
      <div className="px-[80px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] h-[410px] flex-row justify-center items-center">
        <h1 className="text-center  text-[48px] font-bold text-white pt-20">
          Trusted by Millions, Built for You
        </h1>
        <div className="text-center flex justify-center items-center gap-36 py-10">
          <div>
            <p className="text-[#ffffff]">Total Downloads</p>
            <h1 className="text-white font-bold text-[64px]">29.6M</h1>
            <p className="text-white">21% more than last month</p>
          </div>
          <div>
            <p className="text-[#ffffff]">Total Reviews</p>
            <h1 className="text-white font-bold text-[64px]">906K</h1>
            <p className="text-white">46% more than last month</p>
          </div>
          <div>
            <p className="text-[#ffffff]">Active Apps</p>
            <h1 className="text-white font-bold text-[64px]">132+</h1>
            <p className="text-white">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
