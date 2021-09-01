import React from "react";
import { Container } from "@material-ui/core";
import { useRouter } from "next/router";

import {
  CategoryBar,
  Layout,
  CategoryBanner,
} from "../../../src/Re_components";
import CategoryGlasses from "./CategoryGlasses";

const Category = () => {
  const router = useRouter();
  const title = router.asPath.toUpperCase();
  const bannerTitle = title.split("/").join(">");

  return (
    <Layout title={bannerTitle}>
      <Container maxWidth={false}>
        <CategoryBar categoryTitle={bannerTitle} />
        <CategoryBanner categoryTitle={bannerTitle} />
        <CategoryGlasses />
      </Container>
    </Layout>
  );
};

export default Category;
