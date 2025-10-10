import React from "react";
import error from "./../../assets/error-404.png";

import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div className="px-[80px] flex-col justify-center items-center bg-gray-100 py-30">
      <img className="justify-self-center" src={error} alt="" />
      <h1 className="text-center font-bold text-3xl mt-4">
        Oops, page not found!
      </h1>
      <p className="text-center text-gray-400 m1-4">
        The page you are looking for is not available.
      </p>
      <Link to={"/"}>
        <button className="flex justify-self-center px-[40px] py-[16px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] mt-[16px] rounded-[4px] font-semibold text-[white]">
          Go Back!
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
