import React from "react";
import { useDispatch } from "react-redux";
import { fetchedProducts } from "../../../src/redux/slices/productSlice";

import productApi from "../../api/products";
import Category from "./Category";

const ProductByCategory = ({ data }) => {
  const dispatch = useDispatch();

  dispatch(fetchedProducts(data.products));

  return <Category />;
};

export default ProductByCategory;

export async function getServerSideProps({ query }) {
  const { cid } = query;
  const { data } = await productApi.getProductByCategory(cid);
  return { props: { data } };
}
