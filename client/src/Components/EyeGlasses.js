import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import { Heading } from "./../Re_components";
import Products from "./Products";

const useStyles = makeStyles(() => ({
  heading: { padding: "20px", fontSize: 25, fontWeight: "bold" },
}));

const EyeGlasses = () => {
  const classes = useStyles();

  return (
    <>
      <Heading className={clsx(classes.heading)} isDivider>
        EYEGLASSES
      </Heading>
      <Products />
    </>
  );
};

export default EyeGlasses;
