import React from "react";
import { useDispatch } from "react-redux";
import { Container, Box } from "@material-ui/core";

import Products from "../../src/Components/Products";
import { fetchedProducts } from "../../src/redux/slices/productSlice";
import productApi from "../api/products";
import Layout from "../../src/Re_components/Layout";

const Search = ({ data }) => {
  const dispatch = useDispatch();

  dispatch(fetchedProducts(data.products));
  return (
    <Layout title="Search">
      <Container maxWidth="lg">
        <Box mt={4}>
          <Products />
        </Box>
      </Container>
    </Layout>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  const { sid } = query;
  const { data } = await productApi.getSearchProduct(sid);
  return { props: { data } };
}
