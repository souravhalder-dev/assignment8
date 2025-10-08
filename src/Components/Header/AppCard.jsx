import React from "react";
import AppsCard from "../Apps/AppsCard";
import { Link } from "react-router";

const AppCard = ({ data }) => {
  const datas = data.slice(0, 8);
  return (
    <div className="">
      <h1 className="text-center font-bold text-[48px] mt-20 ">
        Trending Apps
      </h1>
      <p className="text-center text-gray-400">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="px-[80px] grid grid-cols-4 gap-2">
        {datas.map((singleDta) => (
          <AppsCard key={singleDta.id} singleDta={singleDta}></AppsCard>
        ))}
      </div>
      <div className="justify-self-center mt-10">
        <Link to={"/apps"}>
          <button className="cursor-pointer p-4 w-[124px] h-[50px]  text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
            Show All{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppCard;
