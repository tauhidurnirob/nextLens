import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import ProductForm from "./ProductForm";
import products from "../../fakeData/products";
import { Cards } from "../../Re_components";

const Product = () => {
  return (
    <Container maxWidth="lg">
      <ProductForm />
      <Box mt={4} mb={4}>
        <Grid container direction="row" spacing={4} justifyContent="center">
          {products.map((item, index) => (
            <Grid item container md={4}>
              <Cards items={item} key={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Product;
