import React from "react";
import { Layout } from "./../../src/Re_components";
import Shipping from "./Shipping";
import CartCheckout from "../../src/Components/CartCheckout";

const index = () => {
  return (
    <Layout title="Shipping">
      <Shipping />
      <CartCheckout isPayment />
    </Layout>
  );
};

export default index;
