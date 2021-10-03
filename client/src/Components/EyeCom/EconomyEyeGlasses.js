import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
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
      <Heading isDivider>
        <Typography className={clsx(classes.heading)}>
          ECONOMY EYEGLASSES
        </Typography>
      </Heading>
      <Products />
    </>
  );
};

export default EconomyEyeGlasses;
