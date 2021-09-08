import React from "react";
import {
  Container,
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
import { productList } from "../redux/slices/productSlice";
import Payment from "./Payment";
import { Heading } from "./../Re_components";

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
    marginBottom: "5px",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.green,
      color: colors.white,
    },
  },
}));

const CartCheckout = ({ isProcessBtn, isPayment }) => {
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
          <Grid item container justifyContent="space-evenly">
            <Typography variant="h6" gutterBottom>
              Total items :
            </Typography>
            <Typography variant="h6" gutterBottom>
              * {` `}
              {totalItems}
            </Typography>
          </Grid>
          <Divider style={{ marginBottom: "5px" }} />
          <Grid item container justifyContent="space-evenly">
            <Typography variant="h6" gutterBottom>
              Grand Total :
            </Typography>
            <Typography variant="h6" gutterBottom>
              ৳{` `}
              {totalAmount}
            </Typography>
          </Grid>

          {isProcessBtn && (
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
          )}
          {isPayment && (
            <>
              <Typography variant="h6" gutterBottom>
                Select Payment Method
              </Typography>
              <Divider style={{ marginBottom: "5px" }} />

              <Payment />
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartCheckout;
