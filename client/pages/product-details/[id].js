import React from "react";
import { useDispatch } from "react-redux";

import ProductDetails from "./ProductDetail";

import { findById } from "../../src/redux/slices/productSlice";
import productApi from "../api/products";

const ProductId = ({ data }) => {
  const findData = Object.assign({}, ...data);
  const dispatch = useDispatch();

  dispatch(findById(findData));

  return <ProductDetails />;
};

export default ProductId;

export async function getStaticPaths() {
  const {
    data: { products },
  } = await productApi.getAllProduct();
  const paths = products?.map((item) => ({
    params: {
      id: item.slug,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await productApi.getProductById(params.id);
  return { props: { data }, revalidate: 1 };
}
