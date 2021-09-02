import React, { useEffect } from "react";

import { useRouter } from "next/router";
import productApi from "../api/products";

const Search = ({ data }) => {
  // const router = useRouter();
  // const { pid } = router.query;
  // const testData = async () => {
  //   const { data } = await productApi.getSearchProduct(pid);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   testData();
  // }, [pid]);
  console.log(data);
  return <h1>Post:</h1>;
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

export async function getServerSideProps({ query }) {
  const { pid } = query;
  console.log("pid", pid);
  const { data } = await productApi.getSearchProduct(pid);
  return { props: { data } };
}
