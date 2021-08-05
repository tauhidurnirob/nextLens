import React from "react";

import { Layout, CategoryBanner } from "../../src/Re_components";
import ProductSubHeader from "./ProductSubHeader";
import ProductViewDetails from "./ProductViewDetails";

const ProductDetails = ({ data }) => {
  return (
    <Layout title="Product Details">
      <CategoryBanner data={data} />
      <ProductSubHeader data={data} />
      <ProductViewDetails data={data} />
    </Layout>
  );
};

export default ProductDetails;
