import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ProductDetails from "./ProductDetail";
import products from "../../fakeData/products";
import { default as Product } from "../../src/redux/slices/productSlice";

const ProductId = ({ data }) => {
  const dispatch = useDispatch();

  dispatch(Product(data));

  return <ProductDetails data={data} />;
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
