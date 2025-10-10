import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import dounloadicon from "./../../assets/icon-downloads.png";
import avarageicon from "./../../assets/icon-ratings.png";
import reviewicon from "./../../assets/icon-review.png";
import RatingChart from "./RatingChart";
import { toast } from "react-toastify";

const AppsinfoPage = () => {
  const { id } = useParams();
  const nuberConvertid = parseInt(id);
  const data = useLoaderData();

  const singleApps = data.find((singleApp) => singleApp.id === nuberConvertid);

  const {
    image,
    title,
    downloads,
    ratingAvg,
    companyName,
    reviews,
    size,
    description,
  } = singleApps;

  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(installed);
  }, []);

  const isInstalled = installedApps.some((app) => app.id === singleApps.id);

  const handalClicked = () => {
    let installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installed.find((app) => app.id === singleApps.id)) {
      installed.push(singleApps);
      localStorage.setItem("installedApps", JSON.stringify(installed));
      setInstalledApps(installed);
      toast.success("Success installed !", {
        position: "top-center",
      });
    }
  };
  if (!singleApps) {
    throw new Response("app not found ", { status: 404 });
  }
  return (
    <div className="bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-20 py-8 sm:py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-start lg:justify-start items-start lg:items-center gap-6 lg:gap-10">
        <img
          className="w-full lg:w-[350px] h-[200px] lg:h-auto object-cover bg-cover overflow-hidden rounded-md"
          src={image}
          alt=""
        />
        <div className="w-full lg:w-auto">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-[32px]">
            {title}
          </h1>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">
            Developed by {companyName}
          </p>
          <hr className="mt-4 sm:mt-6 lg:mt-7 text-gray-300" />
          <div className="mt-4 sm:mt-6 lg:mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-[24px]">
            <div className="flex flex-col items-center sm:items-start gap-1">
              <img className="h-[24px] sm:h-[30px]" src={dounloadicon} alt="" />
              <h1 className="text-gray-400 text-xs sm:text-sm">Downloads</h1>
              <p className="font-bold text-xl sm:text-[25px]">{downloads}M</p>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-1">
              <img className="h-[24px] sm:h-[30px]" src={avarageicon} alt="" />
              <h1 className="text-gray-400 text-xs sm:text-sm">
                Average Ratings
              </h1>
              <p className="font-bold text-xl sm:text-[25px]">{ratingAvg}</p>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-1">
              <img className="h-[24px] sm:h-[30px]" src={reviewicon} alt="" />
              <h1 className="text-gray-400 text-xs sm:text-sm">
                Total Reviews
              </h1>
              <p className="font-bold text-xl sm:text-[25px]">{reviews}K</p>
            </div>
          </div>
          <button
            onClick={handalClicked}
            disabled={isInstalled}
            className={`mt-6 sm:mt-8 lg:mt-9 btn bg-[#00D390] p-3 sm:p-4 text-white rounded-md w-full lg:w-auto ${
              isInstalled ? " !bg-yellow-600 cursor-not-allowed" : " "
            }`}
          >
            {isInstalled ? " Installed" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>
      <hr className="text-gray-300 mt-6 sm:mt-8 lg:mt-10" />
      <RatingChart singleApps={singleApps} />
      <div className="mt-6 sm:mt-8 lg:mt-9">
        <h1 className="font-bold mb-2 text-lg sm:text-xl">Description</h1>
        {description}
      </div>
    </div>
  );
};

export default AppsinfoPage;
