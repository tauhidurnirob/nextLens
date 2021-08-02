import React from "react";
import Banner from "./Banner";
import Layout from "./Layout";
import Category from "./Category";

const Home = () => {
  return (
    <Layout title="Home">
      <Banner />
      <Category />
    </Layout>
  );
};

export default Home;
