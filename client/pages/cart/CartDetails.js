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
import { productSelector } from "../../src/redux/slices/productSlice";
import CartTable from "./CartTable";
import CartCheckout from "../../src/Components/CartCheckout";

const useStyles = makeStyles((theme) => ({
  container: { padding: "84px 0 0 0 " },
  heading: {
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
}));

const CartDetails = () => {
  const classes = useStyles();
  const { back } = useRouter();

  const { cart } = useSelector(productSelector);

  return (
    <Container maxWidth="lg" className={clsx(classes.container)}>
      {cart.length !== 0 ? (
        <>
          <Heading isDivider>
            <Typography variant="h4">Cart</Typography>
          </Heading>
          <CartTable />
          <CartCheckout isProcessBtn />
        </>
      ) : (
        <>
          <Heading>
            <Typography
              className={clsx(classes.heading)}
              variant="h4"
              align="center"
            >
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
      )}
    </Container>
  );
};

export default CartDetails;
