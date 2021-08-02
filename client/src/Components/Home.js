import React from "react";
import Banner from "./Banner";
import Layout from "./Layout";
import Category from "./Category";
import EyeGlasses from "./EyeGlasses";

const Home = () => {
  return (
    <Layout title="Home">
      <Banner />
      <Category />
      <EyeGlasses />
    </Layout>
  );
};

export default Home;
