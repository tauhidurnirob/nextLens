import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { Element } from "react-scroll";

import { Heading } from "../../Re_components";
import Products from "../Products";

const useStyles = makeStyles(() => ({
  heading: { padding: "20px 0 5px 0", fontSize: 25, fontWeight: "bold" },
}));

const EconomyEyeGlasses = () => {
  const classes = useStyles();

  return (
    <Element name="productSection">
      <Heading isDivider>
        <Typography className={clsx(classes.heading)}>
          ECONOMY EYEGLASSES
        </Typography>
      </Heading>
      <Products />
    </Element>
  );
};

export default EconomyEyeGlasses;
