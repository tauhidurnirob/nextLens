import React, { useEffect } from "react";

import { useRouter } from "next/router";
import productApi from "../api/products";

const Search = ({}) => {
  const router = useRouter();
  const { pid } = router.query;
  console.log(router);
  const testData = async () => {
    const { data } = await productApi.getSearchProduct(pid);
    console.log(data);
  };
  useEffect(() => {
    testData();
  }, [pid]);
  return <h1>Post: {pid}</h1>;
};

export default Search;

// export async function getStaticPaths() {
//   const {
//     data: { products },
//   } = await productApi.getAllProduct();
//   const paths = products?.map((item) => ({
//     params: {
//       id: item.slug,
//     },
//   }));
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const { data } = await productApi.getProductById(params.id);
//   return { props: { data }, revalidate: 1 };
// }
