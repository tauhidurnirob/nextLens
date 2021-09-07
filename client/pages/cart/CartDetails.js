import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import HistoryIcon from "@material-ui/icons/History";

import { Heading } from "../../src/Re_components";
import { productList } from "../../src/redux/slices/productSlice";
import CartTable from "./CartTable";
import CartCheckout from "./CartCheckout";

const useStyles = makeStyles(() => ({
  container: { padding: "84px 0 0 0 " },
  heading: { margin: "20px 0" },
}));

const CartDetails = () => {
  const classes = useStyles();
  const { back } = useRouter();

  const { cart } = useSelector(productList);

  return (
    <Container maxWidth="lg" className={clsx(classes.container)}>
      {/* {cart.length !== 0 ? (
        <>
          <Heading isDivider>
            <Typography variant="h4">Cart</Typography>
          </Heading>
          <CartTable />
        </>
      ) : (
        <>
          <Heading>
            <Typography className={clsx(classes.heading)} variant="h4">
              You haven't any cart products
            </Typography>
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
      )} */}
      <>
        <Heading isDivider>
          <Typography variant="h4">Cart</Typography>
        </Heading>
        <CartTable />
        <CartCheckout />
      </>
    </Container>
  );
};

export default CartDetails;
