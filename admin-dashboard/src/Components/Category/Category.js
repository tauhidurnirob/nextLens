import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import CategoryForm from "./CategoryForm";
import products from "../../fakeData/products";
import { Cards } from "../../Re_components";

const Category = () => {
  document.title = "Category";

  return (
    <Container maxWidth="lg">
      <CategoryForm />
      <Box mt={4} mb={4}>
        <Grid container direction="row" spacing={4} justifyContent="center">
          {products.map((item, index) => (
            <Grid key={index} item container md={4}>
              <Cards items={item} isTruncate line={1} descLine={4} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Category;
