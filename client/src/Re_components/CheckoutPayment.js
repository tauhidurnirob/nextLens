import React from "react";
import { useSelector } from "react-redux";
import { Container, Grid, Typography, Divider, Box } from "@material-ui/core";

import { shippingSelector } from "./../redux/slices/shippingSlice";
import { productSelector } from "./../redux/slices/productSlice";

const CheckoutPayment = ({ paymentMethod, paymentName }) => {
  const { shippingInfo } = useSelector(shippingSelector);
  const { cart } = useSelector(productSelector);

  const totalItems = cart
    ?.map((item) => item.quantity)
    .reduce((acc, cc) => acc + cc, 0);
  const totalAmount = cart
    ?.map((item) => item.totalPrice)
    .reduce((acc, cc) => acc + cc, 0);

  return (
    <Container maxWidth="lg">
      <Grid container direction="row">
        <Grid item container md={7}>
          <Grid container direction="column">
            <Typography variant="h4" gutterBottom color="textSecondary">
              SHIPPING
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <Box fontWeight="fontWeightBold">Name : {shippingInfo?.name}</Box>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <Box fontWeight="fontWeightBold">
                Email : {shippingInfo?.email}
              </Box>
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <Box fontWeight="fontWeightBold">
                Address : {shippingInfo?.address}, {` `}
                {shippingInfo?.location}, {` `} {shippingInfo?.zipCode}, {` `}
                {shippingInfo?.country}
              </Box>
            </Typography>
          </Grid>
          <Divider style={{ marginBottom: "20px", width: "90%" }} />
          <Grid container direction="column">
            <Typography variant="h4" gutterBottom color="textSecondary">
              PAYMENT METHOD
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <Box fontWeight="fontWeightBold">Method : {paymentName}</Box>
            </Typography>
          </Grid>
          <Divider style={{ marginBottom: "20px", width: "90%" }} />
        </Grid>
        <Grid container md={5} direction="column" justifyContent="center">
          <Typography
            variant="h4"
            gutterBottom
            color="textSecondary"
            align="center"
          >
            ORDER SUMMARY
          </Typography>
          <Typography variant="subtitle1" gutterBottom align="center">
            <Box fontWeight="fontWeightBold">Total Items : * {totalItems}</Box>
          </Typography>
          <Divider style={{ marginBottom: "5px" }} variant="middle" />
          <Typography variant="subtitle1" gutterBottom align="center">
            <Box fontWeight="fontWeightBold">Grand Total : {totalAmount}</Box>
          </Typography>
          <Divider style={{ marginBottom: "5px" }} variant="middle" />
          {paymentMethod}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPayment;
