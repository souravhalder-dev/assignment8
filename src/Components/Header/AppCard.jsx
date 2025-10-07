import React from "react";
import AppsCard from "../Apps/AppsCard";

const AppCard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1 className="text-center font-bold text-[48px] mt-20 ">
        Trending Apps
      </h1>
      <p className="text-center text-gray-400">
        Explore All Trending Apps on the Market developed by us
      </p>
      {data.map((singleDta) => (
        <AppsCard singleDta={singleDta}></AppsCard>
      ))}
    </div>
  );
};

export default AppCard;
