import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { Heading } from "../../Re_components";
import Products from "../Products";

const useStyles = makeStyles(() => ({
  heading: { padding: "20px 0 5px 0", fontSize: 25, fontWeight: "bold" },
}));

const EconomyEyeGlasses = () => {
  const classes = useStyles();

  return (
    <>
      <Heading className={clsx(classes.heading)} isDivider>
        EYEGLASSES EYEGLASSES
      </Heading>
      <Products />
    </>
  );
};

export default EconomyEyeGlasses;
