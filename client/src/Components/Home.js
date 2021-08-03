import React from "react";
import Banner from "./Banner";
import Layout from "./Layout";
import Category from "./Category";
import EconomyEyeGlasses from "./EconomyEyeGlasses";

const Home = () => {
  return (
    <Layout title="Home">
      <Banner />
      <Category />
      <EconomyEyeGlasses />
    </Layout>
  );
};

export default Home;
