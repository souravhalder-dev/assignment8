import React, { useEffect, useState } from "react";

const Installation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    setData(installed);
  }, []);

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
    <div className="bg-gray-100 px-[80px] py-8 rounded-lg shadow mt-8">
      <h1 className="text-center text-2xl font-bold mb-2">
        Your Installed Apps
      </h1>
      <p className="text-center mb-6">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between items-center mb-4">
        <h5>
          {data.length} App{data.length > 1 ? "s" : ""} Found
        </h5>
        <p>Sort By Size</p>
      </div>
      {data.map((app) => (
        <div
          key={app.id}
          className="flex justify-between items-center bg-white p-4 rounded shadow mb-4"
        >
          <div className="flex gap-5 items-center">
            <img
              className="w-[80px] h-[80px] object-cover rounded"
              src={app.image || "https://via.placeholder.com/80"}
              alt={app.title || "App"}
            />
            <div>
              <h1 className="font-semibold text-lg">
                {app.title || "No Title"}
              </h1>
              <div className="flex gap-5 text-gray-600 mt-2">
                <p>
                  {app.downloads
                    ? `${app.downloads}M downloads`
                    : "No downloads"}
                </p>
                <p>{app.ratingAvg ? `${app.ratingAvg} star` : "No rating"}</p>
                <p>{app.size ? `${app.size} MB` : "No size"}</p>
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
