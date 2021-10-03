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
  countAction,
} from "../../src/redux/slices/productSlice";
import productApi from "../api/products";

const Sunglasses = ({ data, counts }) => {
  const dispatch = useDispatch();

  dispatch(fetchedProducts(data?.products));
  dispatch(topMaxProduct(data?.topMaxProduct));
  dispatch(countAction(counts?.countProducts));
  return (
    <Layout title="Sunglasses">
      <Container maxWidth={false}>
        <CategoryBar categoryTitle="SUN GLASSES" />
        <CategoryBanner categoryTitle="SUN GLASSES" />
        <CategoryProducts />
      </Container>
    </Layout>
  );
};

export default Sunglasses;

export async function getStaticProps() {
  const { data } = await productApi.getAllProductByLimit(12);
  const { data: counts } = await productApi.getProductCount();

  return {
    props: { data, counts, revalidate: 1 },
  };
}
