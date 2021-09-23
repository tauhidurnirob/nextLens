import React from "react";
import { Container } from "@material-ui/core";

import {
  CategoryBar,
  Layout,
  CategoryBanner,
  CategoryProducts,
} from "../../../src/Re_components";

const Color = () => {
  return (
    <Layout title="Eye Glasses">
      <Container maxWidth={false}>
        <CategoryBar categoryTitle="EYE GLASSES" />
        <CategoryBanner categoryTitle="EYE GLASSES" />
        <CategoryProducts />
      </Container>
    </Layout>
  );
};

export default Color;
