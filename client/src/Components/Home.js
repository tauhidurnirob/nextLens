import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Banner from "./Banner";
import { Layout } from "../Re_components";
import Category from "./Category";
import EconomyEyeGlasses from "./EyeCom/EconomyEyeGlasses";
import EyeglassesShape from "./EyeCom/EyeglassesShape";
import EyeOffers from "./EyeCom/EyeOffers";
import Support from "./Support";

const Home = () => {
  return (
    <Layout title="Home">
      <ToastContainer />
      <Banner />
      <Category />
      <EyeglassesShape />
      <EyeOffers />
      <EconomyEyeGlasses />
      <Support />
    </Layout>
  );
};

export default Home;
