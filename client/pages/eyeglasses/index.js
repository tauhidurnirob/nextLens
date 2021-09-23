import React from "react";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";

import {
  CategoryBar,
  Layout,
  CategoryBanner,
  CategoryProducts,
} from "./../../src/Re_components";
import {
  fetchedProducts,
  topMaxProduct,
} from "../../src/redux/slices/productSlice";
import productApi from "../api/products";

const EyeGlasses = ({ data }) => {
  const dispatch = useDispatch();

  dispatch(fetchedProducts(data?.products));
  dispatch(topMaxProduct(data?.topMaxProduct));
  return (
    <Layout title="Eye Glasses">
      <Container maxWidth={false}>
        <CategoryBar categoryTitle="EYE GLASSES" />
        <CategoryBanner categoryTitle="EYE GLASSES" />
        <CategoryProducts />
      </Container>
    </Layout>
  );
};

export default EyeGlasses;

export async function getStaticProps() {
  const { data } = await productApi.getAllProductByLimit(12);

  return {
    props: { data, revalidate: 1 },
  };
}
