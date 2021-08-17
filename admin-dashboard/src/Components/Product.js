import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const Product = () => {
  const classes = useStyles();

  return (
    <Container className={clsx(classes.container)}>
      <Grid> PRoducts</Grid>
    </Container>
  );
};

export default Product;
