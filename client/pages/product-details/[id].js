import React from "react";

import ProductDetails from "./ProductDetail";
import products from "../../fakeData/products";

const ProductId = ({ data }) => {
  const mainData = { ...data, quantity: 1, totalPrice: data?.price };
  return <ProductDetails data={mainData} />;
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
