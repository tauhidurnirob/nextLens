import React from "react";
import { Grid } from "@material-ui/core";
import Image from "next/image";

const ProductImage = ({ data }) => {
  return (
    <Grid item container md={4}>
      <Image src={data.image} alt={data.title} width={500} height={500} />
    </Grid>
  );
};

export default ProductImage;
