import React from "react";
import { makeStyles, Box } from "@material-ui/core";

import { default as MainHome } from "../src/Components/Home";
import clsx from "clsx";
import productApi from "./api/products";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: "1440px",
    width: "100%",
    padding: "0 10px",
    margin: "0 auto",
    position: "relative",
  },
}));

const Home = ({ data }) => {
  console.log(data);
  const classes = useStyles();
  return (
    <Box component="div" className={clsx(classes.container)}>
      <MainHome />
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  const { data } = await productApi.getAllProduct();

  return {
    props: { data, revalidate: 1 },
  };
}
