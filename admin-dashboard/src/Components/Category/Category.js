import React from "react";
import { Container, Box } from "@material-ui/core";

import CategoryForm from "./CategoryForm";
import CategoryTable from "./CategoryTable";

const Category = () => {
  document.title = "Category";

  return (
    <Container maxWidth="lg">
      <CategoryForm />
      <Box mt={4} mb={4}>
        <CategoryTable />
      </Box>
    </Container>
  );
};

export default Category;
