import React from "react";
import { useDispatch } from "react-redux";
import { findByCategory } from "../../../src/redux/slices/productSlice";

import productApi from "../../api/products";
import Category from "../Category";

const ProductByCategory = ({ data }) => {
  const dispatch = useDispatch();

  dispatch(findByCategory(data));

  return <Category />;
};

export default ProductByCategory;

export async function getStaticPaths() {
  const {
    data: { products },
  } = await productApi.getAllProduct();
  const paths = products?.map((item) => ({
    params: {
      id: item.category,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await productApi.getProductByCategory(params.id);
  return { props: { data }, revalidate: 1 };
}
