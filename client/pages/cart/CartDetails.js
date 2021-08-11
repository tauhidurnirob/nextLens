import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import HistoryIcon from "@material-ui/icons/History";

import { Button, Heading, Text } from "./../../src/Re_components";
import { cartList } from "./../../src/redux/slices/productSlice";
import CartTable from "./CartTable";

const useStyles = makeStyles(() => ({
  container: { padding: "84px 0 0 0 " },
  heading: { margin: "20px 0" },
}));

const CartDetails = () => {
  const classes = useStyles();
  const { back } = useRouter();

  const { cart } = useSelector(cartList);

  return (
    <Container maxWidth="lg" className={clsx(classes.container)}>
      {cart.length !== 0 ? (
        <>
          <Heading isDivider>
            <Text variant="h4">Cart</Text>
          </Heading>
          <CartTable />
        </>
      ) : (
        <>
          <Heading className={clsx(classes.heading)}>
            <Text variant="h4">You haven't any cart products</Text>
          </Heading>
          <Grid container justifyContent="center">
            <Button
              startIcon={<HistoryIcon />}
              variant="outlined"
              color="primary"
              onClick={() => back()}
            >
              Go Back
            </Button>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default CartDetails;
