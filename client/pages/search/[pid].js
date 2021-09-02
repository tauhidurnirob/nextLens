import React from "react";

import productApi from "../api/products";

const Search = ({ data }) => {
  return <h1>Post:</h1>;
};

export default Search;

export async function getServerSideProps({ query }) {
  const { pid } = query;
  const { data } = await productApi.getSearchProduct(pid);
  return { props: { data } };
}
