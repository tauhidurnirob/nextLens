import React from "react";
import { useRouter } from "next/router";

import ProductDetails from "./ProductDetail";
import products from "../../fakeData/products";

const ProductId = ({ data }) => {
  const { query } = useRouter();
  console.log(query);
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
