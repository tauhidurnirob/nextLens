import React from "react";
import { Container, makeStyles, Grid, Box } from "@material-ui/core";
import clsx from "clsx";
import { Layout, CheckoutPayment } from "../../src/Re_components";
import { PayPalButton } from "react-paypal-button-v2";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(10)}px 0 0 0`,
  },
}));

const paypal = () => {
  const classes = useStyles();

  return (
    <Layout title="Payment-Paypal">
      <Container maxWidth="lg" className={clsx(classes.container)}>
        <CheckoutPayment
          paymentName="Paypal"
          paymentMethod={
            <Grid container justifyContent="center">
              <Box mt={2}>
                <PayPalButton />
              </Box>
            </Grid>
          }
        />
      </Container>
    </Layout>
  );
};

export default paypal;
