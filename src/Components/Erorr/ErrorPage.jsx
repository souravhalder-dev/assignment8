import React from "react";
import error from "./../../assets/error-404.png";
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
    </div>
  );
};

export default ErrorPage;
