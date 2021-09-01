import React from "react";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { CategoryBar, Layout, CategoryBanner } from "./../../src/Re_components";
import CategoryEyeGlassProducts from "./CategoryEyeGlassProducts";
import { fetchedProducts } from "../../src/redux/slices/productSlice";
import productApi from "../api/products";

const EyeGlasses = ({ data }) => {
  const dispatch = useDispatch();

  dispatch(fetchedProducts(data.products));
  return (
    <Layout title="Eye Glasses">
      <Container maxWidth={false}>
        <CategoryBar />
        <CategoryBanner title="EYE GLASSES" />
        <CategoryEyeGlassProducts />
      </Container>
    </Layout>
  );
};

export default EyeGlasses;

export async function getStaticProps() {
  const { data } = await productApi.getAllProduct();

  return {
    props: { data, revalidate: 1 },
  };
}
