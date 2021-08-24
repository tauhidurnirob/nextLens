import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { default as MainHome } from "../src/Components/Home";
import clsx from "clsx";
import productApi from "./api/products";
import { fetchedProducts, topProducts } from "../src/redux/slices/productSlice";

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
  const dispatch = useDispatch();

  dispatch(fetchedProducts(data.products));
  dispatch(topProducts(data.topProduct));

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
