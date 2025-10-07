import React from "react";
import TextBanner from "../Header/TextBanner";
import Banner from "../Header/Banner";
import AppCard from "../Header/AppCard";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="bg-gray-100">
      <TextBanner></TextBanner>
      <Banner></Banner>
      <AppCard data={data}></AppCard>
    </div>
  );
};

export default Home;
