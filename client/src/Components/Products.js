import React from "react";
import { Grid } from "@material-ui/core";

import { Cards } from "./../Re_components";
import products from "../../fakeData/products";

const Products = () => {
  return (
    <Grid container direction="row">
      {products.map((item, index) => (
        <Grid container md={4} justifyContent="center">
          <Cards
            key={index}
            title={item.title}
            image={item.image}
            isProduct
            width={500}
            height={500}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
