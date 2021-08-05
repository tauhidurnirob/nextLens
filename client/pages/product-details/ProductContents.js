import React from "react";
import { Grid } from "@material-ui/core";
import Image from "next/image";

const ProductContents = ({ data }) => {
  return (
    <Grid item container md={6}>
      <Image src={data.image} alt={data.title} width={500} height={500} />
    </Grid>
  );
};

export default ProductContents;
