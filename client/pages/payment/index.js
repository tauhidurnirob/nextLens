import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import CheckoutSteps from "./../../src/Re_components/CheckoutSteps";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(10)}px 0 10px 0`,
    overflow: "hidden",
    width: "100%",
  },
}));

const index = () => {
  const classes = useStyles();

  return (
    <Container className={clsx(classes.container)}>
      <Grid>
        {" "}
        <CheckoutSteps step1 step2 step3 />
        Welcome to payment
      </Grid>
    </Container>
  );
};

export default index;
