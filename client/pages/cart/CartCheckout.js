import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  Button,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useSelector } from "react-redux";

import colors from "../../config/colors";
import { productList } from "./../../src/redux/slices/productSlice";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(2)}px 0`,
  },
  box: {
    border: "1px solid black",
    padding: `${theme.spacing(2)}px `,
    margin: `${theme.spacing(2)}px  0px`,
  },
  btn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "10px 20px",
    minWidth: "220px",
    letterSpacing: "2px",
    borderRadius: 0,
    borderColor: "2px solid #222",
    fontSize: "16px",
    fontWeight: "bold",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.green,
      color: colors.white,
    },
  },
}));

const CartCheckout = () => {
  const classes = useStyles();
  const { cart } = useSelector(productList);

  const totalItems = cart
    .map((item) => item.quantity)
    .reduce((acc, cc) => acc + cc, 0);
  const totalAmount = cart
    .map((item) => item.totalPrice)
    .reduce((acc, cc) => acc + cc, 0);

  return (
    <Container maxWidth={false} className={clsx(classes.container)}>
      <Grid container justifyContent="center">
        <Grid
          item
          md={6}
          container
          justifyContent="center"
          className={clsx(classes.box)}
          direction="column"
        >
          <Typography variant="h6" gutterBottom align="center">
            Subtotal : Total items {totalItems} & Total amount ৳{totalAmount}
          </Typography>
          <Button
            className={clsx(classes.btn)}
            variant="contained"
            color="primary"
            startIcon={<ArrowForwardIosIcon />}
          >
            Processes to checkout
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartCheckout;
