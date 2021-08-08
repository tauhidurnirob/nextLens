import React from "react";
import { Container, makeStyles } from "@material-ui/core";

import { CategoryBar, Layout } from "./../../src/Re_components";

const index = () => {
  return (
    <Layout title="Eye Glasses">
      <Container maxWidth={false}>
        <CategoryBar />
      </Container>
    </Layout>
  );
};

export default index;
