import React from "react";
import { makeStyles, Box, Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import styles from "../../styles/categoryBanner.module.scss";
import { ShouldBeCapital } from "../../utils/utils";
import { productSelector } from "./../redux/slices/productSlice";

const useStyles = makeStyles(() => ({
  title: {
    color: "#fff",
    fontSize: "40px",
    fontWeight: "700",
    letterSpacing: "5px",
  },
}));

const CategoryBanner = ({ categoryTitle, title }) => {
  const classes = useStyles();
  const router = useRouter();
  const route = router.asPath.split("/")[1];

  const { productById } = useSelector(productSelector);

  return (
    <Grid
      container
      className={clsx(styles.banner__bg)}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Typography align="center" variant="h2" className={clsx(classes.title)}>
        <Box fontWeight="fontWeightBold">
          {route === "eyeglasses" ||
          route === "sunglasses" ||
          route === "blue-light-block-glasses"
            ? categoryTitle
            : ShouldBeCapital(productById.title)}
        </Box>
        <Box fontWeight="fontWeightBold">{route === "shipping" && title}</Box>
      </Typography>
    </Grid>
  );
};

export default CategoryBanner;
