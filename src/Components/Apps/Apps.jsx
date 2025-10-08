import React from "react";
import { useLoaderData } from "react-router";
import Allaps from "./Allaps";

const Apps = () => {
  const datas = useLoaderData();
  return (
    <div className="bg-gray-100 px-[80px]">
      <h1 className="text-center pt-20 text-[48px] font-bold">
        Our All Applications
      </h1>
      <p className="text-center pt-4 text-gray-400">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center mt-10">
        <p className="text-2xl font-bold">({datas.length}) Apps Found</p>
        <p></p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {datas.map((data) => (
          <Allaps data={data}></Allaps>
        ))}
      </div>
    </div>
  );
};

export default Apps;
