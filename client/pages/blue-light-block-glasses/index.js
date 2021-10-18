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

const BlueLightBlockGlass = ({ data, counts }) => {
  const dispatch = useDispatch();

  dispatch(fetchedProducts(data?.products));
  dispatch(topMaxProduct(data?.topMaxProduct));
  dispatch(countAction(counts?.countProducts));
  return (
    <Layout title="Blue Light Block Glasses">
      <Container maxWidth={false}>
        <CategoryBanner categoryTitle="Blue Light Block Glasses" />
        <CategoryProducts category="blue light block glass" />
      </Container>
    </Layout>
  );
};

export default BlueLightBlockGlass;

export async function getStaticProps() {
  const { data } = await productApi.getProductByCategory(
    "blue light block glass",
    12
  );
  const { data: counts } = await productApi.getProductCount();

  return {
    props: { data, counts, revalidate: 1 },
  };
}
