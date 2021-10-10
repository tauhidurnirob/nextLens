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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductBySearch = async () => {
      if (search || category) {
        setLoading(true);
        const { data } = await productApi.getQueryProducts(search, category);
        setLoading(false);

        dispatch(allProductAction(data));
      }
    };

    if (!search && !category) {
      const getProducts = async () => {
        setLoading(true);
        const { data, ok } = await productApi.getAllProductByLimit(12);
        setLoading(false);
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
        <CategoryTable loading={loading} />
      </Box>
    </Container>
  );
};

export default Category;
