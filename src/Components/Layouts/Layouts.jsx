import React from "react";
import Navber from "../Header/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import LoadingBar from "./LoadingBar";

const Layouts = () => {
  return (
    <div>
      <Navber />

      <Outlet />
      <LoadingBar />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layouts;
