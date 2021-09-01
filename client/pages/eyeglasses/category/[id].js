import React from "react";
import { useDispatch } from "react-redux";

import productApi from "../../api/products";
import EyeGlasses from "../index";

const ProductByCategory = ({}) => {
  // const findData = Object.assign({}, ...data);
  // const dispatch = useDispatch();

  // dispatch(findById(findData));

  return <EyeGlasses />;
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
  console.log(data);
  // return { props: { data }, revalidate: 1 };
}
