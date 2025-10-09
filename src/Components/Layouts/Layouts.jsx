import React from "react";
import Navber from "../Header/Navber";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";

const Layouts = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Navber></Navber>
      {isLoading ? <p>loading</p> : <Outlet></Outlet>}

      <Footer></Footer>
    </div>
  );
};

export default Layouts;
