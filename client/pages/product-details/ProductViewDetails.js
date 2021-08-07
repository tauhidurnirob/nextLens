import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import ProductImage from "./ProductImage";
import ProductContents from "./ProductContents";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const ProductViewDetails = ({ data }) => {
  const classes = useStyles();

  return (
    <Container maxWidth={false}>
      <Grid container direction="row" spacing={2}>
        <ProductImage data={data} />
        <ProductContents data={data} />
      </Grid>
    </Container>
  );
};

export default ProductViewDetails;
