import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Button,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PaymentIcon from "@material-ui/icons/Payment";
import PanToolIcon from "@material-ui/icons/PanTool";
import { useDispatch, useSelector } from "react-redux";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import { Heading } from "../Re_components";
import colors from "../../config/colors";
import paypalApi from "../../pages/api/paypal";
import { payOrderAction } from "../redux/slices/paySlice";
import { productSelector, resetCartAction } from "../redux/slices/productSlice";
import { shippingSelector } from "./../redux/slices/shippingSlice";

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
    margin: "20px  0px 0px 0px",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.green,
      color: colors.white,
    },
  },
}));

const Payment = ({ billing }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [clientID, setClientId] = useState(false);
  const { cart } = useSelector(productSelector);
  const { shippingInfo } = useSelector(shippingSelector);

  const totalAmount = cart
    .map((item) => item.totalPrice)
    .reduce((acc, cc) => acc + cc, 0);

  const addPayPalScript = async () => {
    const { data, ok } = await paypalApi.Paypal();
    if (ok) {
      setClientId(data);
    }
  };
  addPayPalScript();

  const createOrder = (data, actions) => {
    return actions.order.create({
      application_context: {
        shipping_preferences: "SET_PROVIDED_ADDRESS",
      },
      purchase_units: [
        {
          amount: {
            value: totalAmount,
          },
          shipping: {
            name: {
              full_name: shippingInfo?.name,
            },
            address: {
              address_line_1: shippingInfo?.address,
              address_line_2: shippingInfo?.state.stateName,
              admin_area_2: shippingInfo?.state.city,
              admin_area_1: shippingInfo?.state.shortName,
              postal_code: shippingInfo?.state.postalCode,
              country_code: "US",
            },
          },
        },
      ],
      intent: "CAPTURE",
    });
  };

  const onApprove = (data, actions) => {
    const paymentResult = actions.order.capture();
    if (paymentResult.resolved) {
      dispatch(payOrderAction(paymentResult));
      dispatch(resetCartAction());
    }
  };

  return billing ? (
    <Container>
      <Grid container justifyContent="center" direction="column">
        <Heading isDivider>
          <Box mt={5}>
            <Typography variant="h6" gutterBottom>
              Select Payment Method
            </Typography>
          </Box>
        </Heading>

        {cart.length !== 0 ? (
          <>
            <Grid item container justifyContent="center">
              <Accordion style={{ marginTop: "20px" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Box fontWeight="fontWeightBold">PayPal</Box>
                </AccordionSummary>
                <AccordionDetails>
                  <PayPalScriptProvider options={{ "client-id": clientID }}>
                    <PayPalButtons
                      createOrder={createOrder}
                      onApprove={onApprove}
                    />
                  </PayPalScriptProvider>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item container justifyContent="center">
              <Button
                startIcon={<PaymentIcon />}
                variant="contained"
                color="primary"
                className={clsx(classes.btn)}
              >
                Stripe
              </Button>
            </Grid>
            <Grid item container justifyContent="center">
              <Button
                startIcon={<PanToolIcon />}
                variant="contained"
                color="primary"
                className={clsx(classes.btn)}
              >
                Cash On
              </Button>
            </Grid>
          </>
        ) : (
          <Typography style={{ marginTop: "20px" }} align="center" variant="h5">
            You haven't any cart products
          </Typography>
        )}
      </Grid>
    </Container>
  ) : null;
};

export default Payment;
