import React from "react";
import { Grid } from "@material-ui/core";
import { Cards } from "../../src/Re_components";

const ProductDetails = ({ data }) => {
  return (
    <Grid container direction="row">
      <Grid container md={6} justifyContent="center">
        <Cards
          title={data.title}
          image={data.image}
          isProduct
          width={500}
          height={500}
        />
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
