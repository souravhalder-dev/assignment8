import React, { useEffect, useState } from "react";
import dounload from "./../../assets/icon-downloads.png";
import rating from "./../../assets/icon-ratings.png";
import { toast } from "react-toastify";
const Installation = () => {
  const [data, setData] = useState([]);
  const [sortdata, setSortdata] = useState(null);
  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    setData(installed);
  }, []);
  const lowtoHigh = () => {
    const shortdata = [...data].sort((a, b) => a.size - b.size);
    setSortdata(shortdata);
  };
  const hightoLow = () => {
    const shortdata = [...data].sort((a, b) => b.size - a.size);
    setSortdata(shortdata);
  };
  const allData = sortdata ? sortdata : data;
  const sortbySize = (datm) => {
    const currentValue = datm.target.value;
    if (currentValue === "htl") {
      hightoLow();
    }
    if (currentValue === "lth") {
      lowtoHigh();
    }
  };

  const handleUninstall = (id) => {
    const updated = data.filter((app) => app.id !== id);
    setData(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.warn("Warning Uninstall Doing !", {
      position: "top-center",
    });
  };

  if (!data || data.length === 0) {
    return (
      <div className="bg-gray-100 px-[80px] py-8 rounded-lg shadow  text-center">
        <h1 className="text-2xl font-bold mb-2">No App Data Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 px-4 sm:px-[80px] rounded-lg shadow py-4 sm:py-8">
      <h1 className="text-center text-xl sm:text-3xl font-bold mb-2">
        Your Installed Apps
      </h1>
      <p className="text-center mb-4 sm:mb-6 text-sm sm:text-base">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4 sm:gap-0">
        <h5 className="font-bold text-xl sm:text-2xl">
          {data.length} App{data.length > 1 ? "s" : ""} Found
        </h5>
        <select
          onChange={(e) => sortbySize(e)}
          defaultValue="selectvalue"
          className="select w-full sm:w-auto"
        >
          <option disabled={true}>Sort by Size</option>
          <option value="htl">High to low</option>
          <option value="lth">low to high</option>
        </select>
      </div>
      {allData.map((app) => (
        <div
          key={app.id}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded shadow mb-4 gap-4 sm:gap-0"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center w-full">
            <img
              className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-cover rounded flex-shrink-0"
              src={app.image}
              alt={app.title}
            />
            <div className="flex-1 min-w-0">
              <h1 className="font-semibold text-base sm:text-lg truncate">
                {app.title}
              </h1>
              <div className="flex flex-wrap gap-3 sm:gap-5 text-gray-600 mt-2">
                <p className="flex justify-center items-center gap-2 text-[#00d390] flex-shrink-0">
                  <img
                    className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
                    src={dounload}
                    alt=""
                  />{" "}
                  {app.downloads} M
                </p>
                <p className="flex justify-center items-center gap-2 text-[#ff8811] flex-shrink-0">
                  <img
                    className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
                    src={rating}
                    alt=""
                  />{" "}
                  {app.size}
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                  {app.size ? `${app.size} MB` : "No size"}
                </p>
              </div>
            </div>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full sm:w-auto mt-2 sm:mt-0"
            onClick={() => handleUninstall(app.id)}
          >
            Uninstall
          </button>
        </div>
      ))}
    </div>
  );
};

export default Installation;
