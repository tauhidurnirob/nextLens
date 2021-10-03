import React from "react";
import { Container, Grid } from "@material-ui/core";
import ProductImage from "./ProductImage";
import ProductContents from "./ProductContents";

const ProductViewDetails = () => {
  return (
    <Container maxWidth="lg">
      <Grid container direction="row" spacing={2}>
        <ProductImage />
        <ProductContents />
      </Grid>
    </Container>
  );
};

export default ProductViewDetails;
