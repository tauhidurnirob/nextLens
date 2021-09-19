import React from "react";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";

import {
  CategoryBar,
  Layout,
  CategoryBanner,
  CategoryProducts,
} from "./../../src/Re_components";
import { fetchedProducts } from "../../src/redux/slices/productSlice";
import productApi from "../api/products";

const Sunglasses = ({ data }) => {
  const dispatch = useDispatch();

  dispatch(fetchedProducts(data?.products));
  return (
    <Layout title="Sunglasses">
      <Container maxWidth={false}>
        <CategoryBar categoryTitle="Sunglasses" />
        <CategoryBanner categoryTitle="Sunglasses" />
        <CategoryProducts />
      </Container>
    </Layout>
  );
};

export default Sunglasses;

export async function getStaticProps() {
  const { data } = await productApi.getAllProduct();

  return {
    props: { data, revalidate: 1 },
  };
}
