import React, { useState } from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";

import { Layout } from "./../../src/Re_components";
import { default as ShippingForm } from "./Shipping";
import CartCheckout from "../../src/Components/CartCheckout";
import { CategoryBanner, Heading } from "./../../src/Re_components";

const Shipping = () => {
  const [billing, setBilling] = useState(false);
  return (
    <Layout title="Shipping">
      <CategoryBanner title="Shipping" />
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Box mt={4}>
            <Heading isDivider>
              <Typography variant="h4">Shipping Details</Typography>
            </Heading>
          </Box>
        </Grid>
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
