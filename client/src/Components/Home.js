import React from "react";
import Banner from "./Banner";
import Layout from "./Layout";
import Category from "./Category";
import EconomyEyeGlasses from "./EconomyEyeGlasses";
import EyeglassesShape from "./EyeglassesShape";
import EyeOffers from "./EyeOffers";

const Home = () => {
  return (
    <Layout title="Home">
      <Banner />
      <Category />
      <EyeglassesShape />
      <EyeOffers />
      <EconomyEyeGlasses />
    </Layout>
  );
};

export default Home;
