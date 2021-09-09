import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";

import { Layout } from "./../../src/Re_components";
import { default as ShippingForm } from "./Shipping";
import CartCheckout from "../../src/Components/CartCheckout";

const Shipping = () => {
  const [billing, setBilling] = useState(false);
  return (
    <Layout title="Shipping">
      <Container maxWidth="lg">
        <Grid container direction="row">
          <Grid item container md={7}>
            <ShippingForm setBilling={setBilling} />
          </Grid>
          <Grid item container md={5}>
            <CartCheckout isPayment billing={billing} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Shipping;
