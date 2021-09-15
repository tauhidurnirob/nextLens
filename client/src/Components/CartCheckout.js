import React from "react";
import {
  makeStyles,
  Grid,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";
import clsx from "clsx";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useSelector } from "react-redux";
import Link from "next/link";

import colors from "../../config/colors";
import { productSelector } from "../redux/slices/productSlice";
import Payment from "./Payment";

const useStyles = makeStyles(() => ({
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
    marginBottom: "5px",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.green,
      color: colors.white,
    },
  },
}));

const CartCheckout = ({ isProcessBtn, isPayment, billing }) => {
  const classes = useStyles();
  const { cart } = useSelector(productSelector);

  const totalItems = cart
    .map((item) => item.quantity)
    .reduce((acc, cc) => acc + cc, 0);
  const totalAmount = cart
    .map((item) => item.totalPrice)
    .reduce((acc, cc) => acc + cc, 0);

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      style={{ marginTop: "20px" }}
    >
      <Grid container justifyContent="space-evenly">
        <Typography variant="h6" gutterBottom>
          Total items :
        </Typography>

        <Typography variant="h6" gutterBottom>
          * {` `}
          {totalItems}
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Divider style={{ marginBottom: "20px", width: "80%" }} />
      </Grid>
      <Grid item container justifyContent="space-evenly">
        <Typography variant="h6" gutterBottom>
          Grand Total :
        </Typography>
        <Typography variant="h6" gutterBottom>
          ${` `}
          {totalAmount}
        </Typography>
      </Grid>

      {isProcessBtn && (
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginTop: "10px" }}
        >
          <Link href="/shipping">
            <Button
              className={clsx(classes.btn)}
              variant="contained"
              color="primary"
              startIcon={<ArrowForwardIosIcon />}
            >
              Processes to checkout
            </Button>
          </Link>
        </Grid>
      )}
      <Grid container justifyContent="center" direction="column">
        {isPayment && (
          <>
            <Grid container justifyContent="center">
              <Divider style={{ marginBottom: "5px", width: "80%" }} />
            </Grid>
            <Payment billing={billing} />
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default CartCheckout;
