import React from "react";
import { Container } from "@material-ui/core";
import { useRouter } from "next/router";

import {
  CategoryBar,
  Layout,
  CategoryBanner,
  CategoryProducts,
} from "../../../src/Re_components";

const Category = () => {
  const router = useRouter();
  const title = router.asPath.toUpperCase();
  const bannerTitle = title.split("/").join(">");

  return (
    <Layout title={bannerTitle}>
      <Container maxWidth={false}>
        <CategoryBar categoryTitle={bannerTitle} />
        <CategoryBanner categoryTitle={bannerTitle} />
        <CategoryProducts />
      </Container>
    </Layout>
  );
};

export default Category;
