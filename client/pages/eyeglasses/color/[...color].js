import React from "react";
import { useDispatch } from "react-redux";
import { fetchedProducts } from "../../../src/redux/slices/productSlice";

import productApi from "../../api/products";
import Keyword from "./Color";

const ProductByColor = ({ data }) => {
  const dispatch = useDispatch();

  dispatch(fetchedProducts(data.products));

  return <Keyword />;
};

export default ProductByColor;

export async function getServerSideProps({ query }) {
  const { color } = query;

  const { data } = await productApi.getProductsByColor(color);
  return { props: { data } };
}
