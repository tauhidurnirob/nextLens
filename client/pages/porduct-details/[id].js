import React from "react";
import { Grid } from "@material-ui/core";
import { Cards } from "./../Re_components";
import products from " ../../../fakeData/products";
import { useRouter } from "next/router";

const ProductDetails = ({ data }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Grid container direction="row">
      <Grid container md={6} justifyContent="center">
        <Cards
          key={index}
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

export async function getStaticPaths() {
  const paths = products.map((item) => ({
    params: { id: item.id },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params: { id } }) {
  const data = products.find((item) => item.id === id);
  return { props: data, revalidate: 1 };
}
