import React from "react";
import { useDispatch } from "react-redux";
import {
  fetchedProducts,
  topMaxProduct,
} from "../../../src/redux/slices/productSlice";

import productApi from "../../api/products";
import Color from "./Color";

const ProductByColor = ({ data }) => {
  const dispatch = useDispatch();

  dispatch(fetchedProducts(data?.products));
  dispatch(topMaxProduct(data?.topMaxProduct));

  return <Color />;
};

export default ProductByColor;

export async function getServerSideProps({ query }) {
  const { color } = query;

  const { data } = await productApi.getProductsByColor(color);
  return { props: { data } };
}
