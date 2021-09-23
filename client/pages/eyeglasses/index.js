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
  allProductsAction,
  fetchedProducts,
  topMaxProduct,
} from "../../src/redux/slices/productSlice";
import productApi from "../api/products";

const EyeGlasses = ({ data, allProduct }) => {
  const dispatch = useDispatch();

  dispatch(fetchedProducts(data?.products));
  dispatch(topMaxProduct(data?.topMaxProduct));
  dispatch(allProductsAction(allProduct?.products));
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
  const { data: allProduct } = await productApi.getAllProduct();

  return {
    props: { data, allProduct, revalidate: 1 },
  };
}
