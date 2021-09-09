import React, { useState } from "react";
import { Container } from "@material-ui/core";

import { Layout } from "./../../src/Re_components";
import { default as ShippingForm } from "./Shipping";
import CartCheckout from "../../src/Components/CartCheckout";

const Shipping = () => {
  const [billing, setBilling] = useState(false);
  return (
    <Layout title="Shipping">
      <Container maxWidth="lg">
        <ShippingForm setBilling={setBilling} />
        <CartCheckout isPayment billing={billing} />
      </Container>
    </Layout>
  );
};

export default Shipping;
