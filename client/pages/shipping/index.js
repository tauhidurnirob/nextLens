import React from "react";
import { Layout } from "./../../src/Re_components";
import { default as ShippingForm } from "./Shipping";
import CartCheckout from "../../src/Components/CartCheckout";

const Shipping = () => {
  return (
    <Layout title="Shipping">
      <ShippingForm />
      <CartCheckout isPayment />
    </Layout>
  );
};

export default Shipping;
