import React, { useLayoutEffect } from "react";
import { makeStyles, Box, Grid } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";

import Text from "./Text";
import styles from "../../styles/categoryBanner.module.scss";
import { ShouldBeCapital } from "../../utils/utils";
import { cartList } from "./../redux/slices/productSlice";

const useStyles = makeStyles(() => ({
  title: {
    color: "#fff",
    fontSize: "40px",
    fontWeight: "700",
    letterSpacing: "5px",
  },
}));

const CategoryBanner = ({ title }) => {
  const classes = useStyles();

  const { productById } = useSelector(cartList);

  return (
    <Grid
      container
      className={clsx(styles.banner__bg)}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Text align="center" variant="h2" className={clsx(classes.title)}>
        <Box fontWeight="fontWeightBold">
          {productById && ShouldBeCapital(productById?.title)} {title && title}
        </Box>
      </Text>
    </Grid>
  );
};

export default CategoryBanner;
