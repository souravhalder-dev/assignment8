import React from "react";
import AppsCard from "../Apps/AppsCard";

const AppCard = ({ data }) => {
  console.log(data);
  const datas = data.slice(0, 8);
  return (
    <div className="pb-[168px]">
      <h1 className="text-center font-bold text-[48px] mt-20 ">
        Trending Apps
      </h1>
      <p className="text-center text-gray-400">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="px-[80px] grid grid-cols-4 gap-2">
        {datas.map((singleDta) => (
          <AppsCard singleDta={singleDta}></AppsCard>
        ))}
      </div>
    </div>
  );
};

export default AppCard;
