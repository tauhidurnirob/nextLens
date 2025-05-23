import React from "react";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";

import {
  Layout,
  CategoryBanner,
  CategoryProducts,
} from "./../../src/Re_components";
import {
  fetchedProducts,
  topMaxProduct,
  countAction,
} from "../../src/redux/slices/productSlice";
import productApi from "../api/products";

const EyeGlasses = ({ data, counts }) => {
  const dispatch = useDispatch();
  dispatch(fetchedProducts(data?.products));
  dispatch(topMaxProduct(data?.topMaxProduct));
  dispatch(countAction(counts?.countProducts));
  return (
    <Layout title="Eye Glasses">
      <Container maxWidth={false}>
        <CategoryBanner categoryTitle="EYE GLASSES" />
        <CategoryProducts category="eyeglasses" />
      </Container>
    </Layout>
  );
};

export default EyeGlasses;

export async function getStaticProps() {
  const { data } = await productApi.getProductByCategory("eyeglasses");
  const { data: counts } = await productApi.getProductCount();

  return {
    props: { data, counts, revalidate: 1 },
  };
}
