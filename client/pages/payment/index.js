import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import CheckoutSteps from "./../../src/Re_components/CheckoutSteps";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const index = () => {
  const classes = useStyles();

  return (
    <Container className={clsx(classes.container)}>
      <CheckoutSteps step1 step2 step3 />

      <Grid> Welcome to payment</Grid>
    </Container>
  );
};

export default index;
