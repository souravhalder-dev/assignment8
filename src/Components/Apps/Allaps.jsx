import React from "react";
import dounload from "./../../assets/icon-downloads.png";
import rating from "./../../assets/icon-ratings.png";
import { Link } from "react-router";
const Allaps = ({ data }) => {
  const { image, title, downloads, ratingAvg, id } = data;
  return (
    <Link to={`/appinfopage/${id}`}>
      <div className="mt-5   my-1">
        <div className="card bg-base-100  shadow-sm p-4">
          <figure className="h-48 overflow-hidden">
            <img className="w-full object-cover" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="flex justify-between items-center">
              <button className="flex btn text-[#00d390] bg-[#f1f5e8]">
                <img className="w-4 h-4" src={dounload} alt="" />
                {parseInt(downloads)}
                <span>M</span>
              </button>
              <button className="btn text-[#ff8811] bg-[#fff0e1]">
                <img className="w-4 h-4" src={rating} alt="" />
                {ratingAvg}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Allaps;
