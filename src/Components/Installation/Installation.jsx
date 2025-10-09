import React, { useEffect, useState } from "react";
import dounload from "./../../assets/icon-downloads.png";
import rating from "./../../assets/icon-ratings.png";
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
  };

  if (!data || data.length === 0) {
    return (
      <div className="bg-gray-100 px-[80px] py-8 rounded-lg shadow mt-8 text-center">
        <h1 className="text-2xl font-bold mb-2">No App Data Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 px-[80px] rounded-lg shadow  py-8">
      <h1 className="text-center text-3xl font-bold mb-2">
        Your Installed Apps
      </h1>
      <p className="text-center mb-6">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-bold text-2xl">
          {data.length} App{data.length > 1 ? "s" : ""} Found
        </h5>
        <select
          onChange={(e) => sortbySize(e)}
          defaultValue="selectvalue"
          className="select"
        >
          <option disabled={true}>Sort by Size</option>
          <option value="htl">High to low</option>
          <option value="lth">low to high</option>
        </select>
      </div>
      {allData.map((app) => (
        <div
          key={app.id}
          className="flex justify-between items-center bg-white p-4 rounded shadow mb-4"
        >
          <div className="flex gap-5 items-center">
            <img
              className="w-[80px] h-[80px] object-cover rounded"
              src={app.image}
              alt={app.title}
            />
            <div>
              <h1 className="font-semibold text-lg">{app.title}</h1>
              <div className="flex gap-5 text-gray-600 mt-2">
                <p className="flex  justify-center items-center gap-2 text-[#00d390]">
                  <img className="w-[20px] h-[20px] " src={dounload} alt="" />{" "}
                  {app.downloads} M
                </p>
                <p className="flex  justify-center items-center gap-2 text-[#ff8811]">
                  <img className="w-[20px] h-[20px] " src={rating} alt="" />{" "}
                  {app.size}
                </p>
                <p className="text-gray-400">
                  {app.size ? `${app.size} MB` : "No size"}
                </p>
              </div>
            </div>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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
