import React from "react";
import { useDispatch } from "react-redux";

import ProductDetails from "./ProductDetail";
import products from "../../fakeData/products";
import { findById } from "../../src/redux/slices/productSlice";

const ProductId = ({ data }) => {
  const dispatch = useDispatch();
  // const mainData = { ...data, quantity: 1, totalPrice: data?.price };

  dispatch(findById(data));

  return <ProductDetails />;
};

export default ProductId;

export async function getStaticPaths() {
  const paths = products.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = products.find((item) => item.id.toString() === params.id);
  return { props: { data }, revalidate: 1 };
}
