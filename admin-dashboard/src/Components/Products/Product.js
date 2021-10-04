import React, { useEffect } from "react";
import { Container, Grid, Box } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import ProductForm from "./ProductForm";
import { Cards } from "../../Re_components";
import {
  adminProductSelector,
  allProductAction,
} from "./../../redux/slices/productSlice";
import productApi from "../../api/products";

const Product = () => {
  document.title = "Products";
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const { data, ok } = await productApi.getAllProductByLimit(12);
      if (ok) dispatch(allProductAction(data));
    };
    getProducts();
  }, [dispatch]);

  const {
    allProduct: { products },
  } = useSelector(adminProductSelector);

  return (
    <Container maxWidth="lg">
      <ProductForm />
      <Box mt={4} mb={4}>
        <Grid container direction="row" spacing={4} justifyContent="center">
          {products?.map((item, index) => (
            <Grid key={index} item container md={4}>
              <Cards items={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Product;
