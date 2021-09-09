import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import clsx from "clsx";
import Link from "next/link";
import PaymentIcon from "@material-ui/icons/Payment";
import PanToolIcon from "@material-ui/icons/PanTool";

import { Heading } from "../Re_components";
import colors from "../../config/colors";

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
    margin: "10px  0px 0px 0px",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.green,
      color: colors.white,
    },
  },
}));

const Payment = ({ billing }) => {
  const classes = useStyles();

  return billing ? (
    <Container>
      <Grid container justifyContent="center" direction="column">
        <Heading isDivider>
          <Typography variant="h6" gutterBottom>
            Select Payment Method
          </Typography>
        </Heading>

        <Link href="/payment/paypal">
          <Button
            variant="contained"
            color="primary"
            startIcon={<PaymentIcon />}
            className={clsx(classes.btn)}
          >
            Paypal
          </Button>
        </Link>
        <Link href="/payment/stripe">
          <Button
            variant="contained"
            color="primary"
            startIcon={<PaymentIcon />}
            className={clsx(classes.btn)}
          >
            Stripe
          </Button>
        </Link>

        <Link href="/payment/cash-on">
          <Button
            variant="contained"
            color="primary"
            startIcon={<PanToolIcon />}
            className={clsx(classes.btn)}
          >
            Cash On
          </Button>
        </Link>
      </Grid>
    </Container>
  ) : null;
};

export default Payment;
