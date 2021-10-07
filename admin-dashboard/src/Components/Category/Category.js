import React, { useState, useEffect } from "react";
import { Container, Box } from "@material-ui/core";

import CategoryForm from "./CategoryForm";
import CategoryTable from "./CategoryTable";
import { useDispatch } from "react-redux";

import { allProductAction } from "../../redux/slices/productSlice";
import productApi from "../../api/products";

const Category = () => {
  document.title = "Category";
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getProductBySearch = async () => {
      if (search || category) {
        const { data } = await productApi.getQueryProducts(search, category);
        dispatch(allProductAction(data));
      }
    };

    if (!search && !category) {
      const getProducts = async () => {
        const { data, ok } = await productApi.getAllProductByLimit(12);
        if (ok) dispatch(allProductAction(data));
      };
      getProducts();
    }

    getProductBySearch();
  }, [dispatch, search, category]);

  return (
    <Container maxWidth="lg">
      <CategoryForm
        searchFunc={(value) => setSearch(value)}
        categoryFunc={(value) => setCategory(value)}
      />
      <Box mt={4} mb={4}>
        <CategoryTable />
      </Box>
    </Container>
  );
};

export default Category;
