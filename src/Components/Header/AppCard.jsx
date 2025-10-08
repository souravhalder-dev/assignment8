import React from "react";
import AppsCard from "../Apps/AppsCard";
import { Link } from "react-router";

const AppCard = ({ data }) => {
  const datas = data.slice(0, 8);
  return (
    <div className="w-full mt-20 flex flex-col items-center pb-[80px]">
      <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl">
        Trending Apps
      </h1>
      <p className="text-center text-gray-400 mt-2 max-w-xl">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="w-full px-4 sm:px-10 md:px-20 lg:px-32 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {datas.map((singleDta) => (
          <AppsCard key={singleDta.id} singleDta={singleDta} />
        ))}
      </div>

      <div className="mt-10">
        <Link to="/apps">
          <button className="cursor-pointer px-6 py-3 w-32 text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-md hover:shadow-lg transition">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppCard;
