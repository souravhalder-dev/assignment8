import React from "react";
import { useLoaderData, useParams } from "react-router";
import dounloadicon from "./../../assets/icon-downloads.png";
import avarageicon from "./../../assets/icon-ratings.png";
import reviewicon from "./../../assets/icon-review.png";
import RatingChart from "./RatingChart";
const AppsinfoPage = () => {
  const { id } = useParams();
  const nuberConvertid = parseInt(id);
  const data = useLoaderData();

  const singleApps = data.find((singleApp) => singleApp.id === nuberConvertid);
  console.log(singleApps);
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
  return (
    <div className="bg-gray-100 px-[80px] py-[80px]">
      <div className=" flex justify-start items-center">
        <img
          className="w-[350px]  object-cover  bg-cover overflow-hidden"
          src={image}
          alt=""
        />
        <div className="ml-[40px]">
          <h1 className="font-bold text-[32px]">{title}</h1>
          <p className="mt-2 text-gray-400">Developed by {companyName}</p>
          <hr className="mt-7 text-gray-300" />
          <div className="mt-7 flex gap-[24px]">
            <div>
              <img className="h-[30px]" src={dounloadicon} alt="" />
              <h1 className="text-gray-400">Downloads</h1>
              <p className="font-bold text-[25px]">{downloads}M</p>
            </div>
            <div>
              <img className="h-[30px]" src={avarageicon} alt="" />
              <h1 className="text-gray-400">Average Ratings</h1>
              <p className="font-bold text-[25px]">{ratingAvg}M</p>
            </div>
            <div>
              <img className="h-[30px]" src={reviewicon} alt="" />
              <h1 className="text-gray-400">Total Reviews</h1>
              <p className="font-bold text-[25px]">{reviews}M</p>
            </div>
          </div>
          <button className="mt-9 btn bg-[#00D390] p-4 text-white rounded-md">
            Install Now ({size}MB)
          </button>
        </div>
      </div>
      <hr className="text-gray-300 mt-10" />
      <RatingChart singleApps={singleApps} />
      <div className="mt-9">{description}</div>
    </div>
  );
};

export default AppsinfoPage;
