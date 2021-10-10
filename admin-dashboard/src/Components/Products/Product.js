import React, { useState, useEffect } from "react";
import { Container, Grid, Box, CardMedia } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import ProductForm from "./ProductForm";
import { Cards } from "../../Re_components";
import {
  adminProductSelector,
  allProductAction,
} from "./../../redux/slices/productSlice";
import productApi from "../../api/products";
import loadingImg from "../../images/imageLoader.svg";

const Product = () => {
  document.title = "Products";
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const { data, ok } = await productApi.getAllProductByLimit(12);
      setLoading(false);
      if (ok) dispatch(allProductAction(data));
    };
    getProducts();
  }, [dispatch]);

  const { allProduct } = useSelector(adminProductSelector);

  return (
    <Container maxWidth="lg">
      <ProductForm />
      <Box mt={4} mb={4}>
        {loading ? (
          <CardMedia
            component="img"
            image={loadingImg}
            title="Loading"
            height="500"
            width="400"
          />
        ) : (
          <Grid container direction="row" spacing={4} justifyContent="center">
            {allProduct?.map((item, index) => (
              <Grid key={index} item container md={3}>
                <Cards items={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default Product;
