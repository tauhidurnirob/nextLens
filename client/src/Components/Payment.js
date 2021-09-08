import React, { useState } from "react";
import {
  Container,
  Grid,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import Link from "next/link";
import AddIcon from "@material-ui/icons/Add";

import { Layout, Heading } from "../Re_components";
import colors from "../../config/colors";

const useStyles = makeStyles((theme) => ({
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

const Payment = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    paypal: false,
    stripe: false,
    cashOn: false,
  });
  const { paypal, stripe, cashOn } = state;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Layout title="Payment">
      <Container>
        <Grid container justifyContent="center">
          <Heading isDivider>
            <Typography variant="h6" gutterBottom>
              Select Payment Method
            </Typography>
          </Heading>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={paypal}
                    onChange={handleChange}
                    name="paypal"
                  />
                }
                label="PAYPAL"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={stripe}
                    onChange={handleChange}
                    name="stripe"
                  />
                }
                label="STRIPE"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={cashOn}
                    onChange={handleChange}
                    name="cashOn"
                  />
                }
                label="CASH ON"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        {paypal ||
          stripe ||
          (cashOn && (
            <Grid container justifyContent="center">
              <Link href="/place-order">
                <Button
                  className={clsx(classes.btn)}
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                >
                  Place Order
                </Button>
              </Link>
            </Grid>
          ))}
      </Container>
    </Layout>
  );
};

export default Payment;
