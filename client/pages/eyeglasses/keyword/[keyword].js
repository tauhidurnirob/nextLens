import React from "react";
import { useDispatch } from "react-redux";
import { fetchedProducts } from "../../../src/redux/slices/productSlice";

import productApi from "../../api/products";
import Keyword from "./Keyword";

const ProductByKeyword = ({ data }) => {
  const dispatch = useDispatch();

  dispatch(fetchedProducts(data.products));

  return <Keyword />;
};

export default ProductByKeyword;

export async function getServerSideProps({ query }) {
  const { keyword } = query;
  const { data } = await productApi.getProductsByColor(keyword);
  return { props: { data } };
}
