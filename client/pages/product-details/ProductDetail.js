import React from "react";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import Layout from "../../src/Components/Layout";

const ProductDetails = ({ data }) => {
  return (
    <Layout title="Product-Details">
      <Grid container direction="row">
        <Grid item container md={6} justifyContent="center">
          <Image src={data.image} alt={data.title} width={500} height={500} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductDetails;
