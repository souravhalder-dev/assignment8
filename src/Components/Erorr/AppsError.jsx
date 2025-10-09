import React from "react";
import aperror from "./../../assets/App-Error.png";
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
    </div>
  );
};

export default AppsError;
