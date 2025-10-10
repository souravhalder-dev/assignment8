import React from "react";
import aperror from "./../../assets/App-Error.png";
import { Link } from "react-router";
const AppsError = () => {
  return (
    <div className="px-[80px] flex-col justify-center items-center bg-gray-100 py-30">
      <img className="justify-self-center" src={aperror} alt="" />
      <h1 className="text-center font-bold text-3xl mt-4">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-center text-gray-400 m1-4">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link to={"/"}>
        <button className="flex justify-self-center px-[40px] py-[16px] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] mt-[16px] rounded-[4px] font-semibold text-[white]">
          Go Back!
        </button>
      </Link>
    </div>
  );
};

export default AppsError;
