import React from "react";
import dounload from "./../../assets/icon-downloads.png";
import rating from "./../../assets/icon-ratings.png";
import { Link } from "react-router";
const Allaps = ({ data }) => {
  const { image, title, downloads, ratingAvg, id } = data;
  return (
    <Link to={`/apps/${id}`}>
      <div className="mt-5 my-1 w-full sm:w-auto">
        <div className="card bg-base-100 shadow-sm p-4 flex flex-col">
          <figure className="h-48 sm:h-56 overflow-hidden rounded-md">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={title}
            />
          </figure>

          <div className="card-body flex flex-col gap-2 mt-2">
            <h2 className="card-title text-lg  sm:text-xl font-semibold">
              {title}
            </h2>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 mt-2">
              <button className="flex items-center gap-1 btn px-3 py-1 text-[#00d390] bg-[#f1f5e8] rounded-md">
                <img className="w-4 h-4" src={dounload} alt="Downloads" />
                {parseInt(downloads)}
                <span>M</span>
              </button>

              <button className="flex items-center gap-1 btn px-3 py-1 text-[#ff8811] bg-[#fff0e1] rounded-md">
                <img className="w-4 h-4" src={rating} alt="Rating" />
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
