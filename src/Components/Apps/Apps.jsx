import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Allaps from "./Allaps";

const Apps = () => {
  const datas = useLoaderData();
  const [search, setSearch] = useState("");
  const query = search.trim().toLowerCase();

  const searchApps = query
    ? datas.filter((app) => app.title.toLowerCase().includes(query))
    : datas;

  return (
    <div className="bg-gray-100 px-4 sm:px-8 lg:px-20 pb-[80px] ">
      <h1 className="text-center pt-8 sm:pt-12 lg:pt-20 text-2xl sm:text-3xl lg:text-4xl font-bold">
        Our All Applications
      </h1>
      <p className="text-center pt-4 text-gray-400 text-sm sm:text-base">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 sm:mt-10 gap-4 sm:gap-0">
        <p className="text-lg sm:text-2xl font-bold">
          ({searchApps.length}) Apps Found
        </p>
        <label className="input">
          {" "}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
          />{" "}
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-2 mt-6]">
        {searchApps.length === 0 ? (
          <div className="col-span-full flex justify-center items-center py-12">
            <div className=" text-center text-gray-400 text-lg font-semibold">
              Apps not found
            </div>
          </div>
        ) : (
          searchApps.map((data) => <Allaps key={data.id} data={data} />)
        )}
      </div>
    </div>
  );
};

export default Apps;
