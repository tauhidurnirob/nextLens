import React from "react";
import { Container } from "@material-ui/core";

import { Layout } from "./../../src/Re_components";
import { default as ShippingForm } from "./Shipping";
import CartCheckout from "../../src/Components/CartCheckout";

const Shipping = () => {
  return (
    <Layout title="Shipping">
      <Container maxWidth="lg">
        <ShippingForm />
        <CartCheckout isPayment />
      </Container>
    </Layout>
  );
};

export default Shipping;
