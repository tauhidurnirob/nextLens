import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import { Layout, CheckoutPayment } from "../../src/Re_components";

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
        <CheckoutPayment paymentName="Paypal" />
      </Container>
    </Layout>
  );
};

export default paypal;
