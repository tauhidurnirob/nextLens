import React from "react";
import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";

import { CategoryBar, Layout, CategoryBanner } from "./../../src/Re_components";
import CategoryEyeGlassProducts from "./CategoryEyeGlassProducts";
import { cartList } from "./../../src/redux/slices/productSlice";

const Category = () => {
  const { productByCategory } = useSelector(cartList);
  return (
    <Layout title="Eye Glasses">
      <Container maxWidth={false}>
        <CategoryBar />
        <CategoryBanner title="EYE GLASSES" />
        <CategoryEyeGlassProducts ProductByCategory={productByCategory} />
      </Container>
    </Layout>
  );
};

export default Category;
