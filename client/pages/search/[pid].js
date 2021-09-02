import React from "react";

import { useRouter } from "next/router";

const Search = ({}) => {
  const router = useRouter();
  const { pid } = router.query;
  console.log(router);
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
