import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  Typography,
  Divider,
  Box,
  Avatar,
} from "@material-ui/core";
import clsx from "clsx";

const CheckoutPayment = ({ paymentMethod, paymentName }) => {
  return (
    <Container maxWidth="lg">
      <Grid container direction="row">
        <Grid item container md={7}>
          <Grid container direction="column">
            <Typography variant="h4" gutterBottom color="textSecondary">
              SHIPPING
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <Box fontWeight="fontWeightBold">Address :</Box>
            </Typography>
          </Grid>
          <Divider style={{ marginBottom: "5px", width: "90%" }} />
          <Grid container direction="column">
            <Typography variant="h4" gutterBottom color="textSecondary">
              PAYMENT METHOD
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <Box fontWeight="fontWeightBold">Method : {paymentName}</Box>
            </Typography>
          </Grid>
          <Divider style={{ marginBottom: "5px", width: "90%" }} />
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
            <Box fontWeight="fontWeightBold">Total Items : * 3</Box>
          </Typography>
          <Divider style={{ marginBottom: "5px" }} variant="middle" />
          <Typography variant="subtitle1" gutterBottom align="center">
            <Box fontWeight="fontWeightBold">Grand Total : 100</Box>
          </Typography>
          <Divider style={{ marginBottom: "5px" }} variant="middle" />
          {paymentMethod}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPayment;
