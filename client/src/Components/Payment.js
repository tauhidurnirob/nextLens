import React from "react";
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Button,
  Box,
} from "@material-ui/core";
import clsx from "clsx";
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
        <Grid item container justifyContent="center">
          <Button
            startIcon={<PaymentIcon />}
            variant="contained"
            color="primary"
            className={clsx(classes.btn)}
          >
            Paypal
          </Button>
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
      </Grid>
    </Container>
  ) : null;
};

export default Payment;
