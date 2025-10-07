import React from "react";
import Navber from "../Header/Navber";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Layouts = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
