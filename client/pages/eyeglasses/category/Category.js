import React from "react";
import { Container } from "@material-ui/core";

import {
  CategoryBar,
  Layout,
  CategoryBanner,
} from "../../../src/Re_components";
import CategoryGlasses from "./CategoryGlasses";

const Category = () => {
  return (
    <Layout title="Eye Glasses">
      <Container maxWidth={false}>
        <CategoryBar />
        <CategoryBanner title="EYE GLASSES" />
        <CategoryGlasses />
      </Container>
    </Layout>
  );
};

export default Category;
