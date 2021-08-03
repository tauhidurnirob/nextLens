import React from "react";
import Banner from "./Banner";
import Layout from "./Layout";
import Category from "./Category";
import EconomyEyeGlasses from "./EconomyEyeGlasses";
import EyeglassesShape from "./EyeglassesShape";

const Home = () => {
  return (
    <Layout title="Home">
      <Banner />
      <Category />
      <EyeglassesShape />
      <EconomyEyeGlasses />
    </Layout>
  );
};

export default Home;
