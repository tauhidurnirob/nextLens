import React from "react";
import { useDispatch } from "react-redux";

import { findByCategory } from "../../src/redux/slices/productSlice";
import productApi from "../api/products";

const ProductCategory = ({ data }) => {
  //   const findData = Object.assign({}, ...data);
  console.log(data);
  const dispatch = useDispatch();

  //   dispatch(findByCategory(findData));

  return <h1>Hello Muktadir</h1>;
};

export default ProductCategory;

export async function getStaticPaths() {
  const {
    data: { products },
  } = await productApi.getAllProduct();
  const paths = products?.map((item) => ({
    params: {
      id: item.category.toString(),
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await productApi.getProductByCategory(params.id);
  return { props: { data }, revalidate: 1 };
}
