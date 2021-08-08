import React from "react";
import { Container } from "@material-ui/core";

import { CategoryBar, Layout, CategoryBanner } from "./../../src/Re_components";

const index = () => {
  return (
    <Layout title="Eye Glasses">
      <Container maxWidth={false}>
        <CategoryBar />
        <CategoryBanner title="EYE GLASSES" />
      </Container>
    </Layout>
  );
};

export default index;
