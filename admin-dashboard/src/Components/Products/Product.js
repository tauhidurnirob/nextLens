import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import ProductForm from "./ProductForm";
import products from "../../fakeData/products";
import { Cards } from "../../Re_components";
import { adminProductSelector } from "./../../redux/slices/productSlice";

const Product = () => {
  document.title = "Products";

  // const { allProducts } = useSelector(adminProductSelector);

  return (
    <Container maxWidth="lg">
      <ProductForm />
      <Box mt={4} mb={4}>
        <Grid container direction="row" spacing={4} justifyContent="center">
          {products.map((item, index) => (
            <Grid key={index} item container md={4}>
              <Cards items={item} isTruncate line={1} descLine={4} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Product;
