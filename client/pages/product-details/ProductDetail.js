import React from "react";

import { Layout, CategoryBanner } from "../../src/Re_components";
import ProductSubHeader from "./ProductSubHeader";
import ProductViewDetails from "./ProductViewDetails";
import ModelDetails from "./ModelDetails";

const ProductDetails = () => {
  return (
    <Layout title="Product Details">
      <CategoryBanner />
      <ProductSubHeader />
      <ProductViewDetails />
      <ModelDetails />
    </Layout>
  );
};

export default ProductDetails;
