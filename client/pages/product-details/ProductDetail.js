import React from "react";
import { Grid } from "@material-ui/core";
import Image from "next/image";

import { Layout, CategoryBanner } from "../../src/Re_components";
import ProductSubHeader from "./ProductSubHeader";

const ProductDetails = ({ data }) => {
  return (
    <Layout title="Product Details">
      <CategoryBanner data={data} />
      <ProductSubHeader data={data}/>
      <Grid container direction="row">
        <Grid item container md={6} justifyContent="center">
          <Image src={data.image} alt={data.title} width={500} height={500} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductDetails;
