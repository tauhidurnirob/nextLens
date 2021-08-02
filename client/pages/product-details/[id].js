import React from "react";

import products from "../../fakeData/products";
import ProductDetails from "./ProductDetail";

const ProductId = ({ data }) => {
  return <ProductDetails data={data} />;
};

export default ProductId;

export async function getStaticProps({ params }) {
  const data = products.find((item) => item.id.toString() === params.id);
  return { props: { data }, revalidate: 1 };
}

export async function getStaticPaths() {
  const paths = products.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return { paths, fallback: false };
}
