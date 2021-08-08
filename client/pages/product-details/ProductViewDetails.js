import React from "react";
import { Container, Grid } from "@material-ui/core";
import ProductImage from "./ProductImage";
import ProductContents from "./ProductContents";

const ProductViewDetails = ({ data }) => {
  return (
    <Container maxWidth="lg">
      <Grid container direction="row" spacing={2}>
        <ProductImage data={data} />
        <ProductContents data={data} />
      </Grid>
    </Container>
  );
};

export default ProductViewDetails;
