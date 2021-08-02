import React from "react";
import Banner from "./Banner";
import Layout from "./Layout";
import { Cards } from "./../Re_components";

const Home = () => {
  return (
    <Layout title="Home">
      <Banner />
      <Cards />
    </Layout>
  );
};

export default Home;
