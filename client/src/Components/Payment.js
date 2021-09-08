import React, { useState } from "react";
import {
  Container,
  Grid,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { Layout, Heading } from "../Re_components";

const Payment = () => {
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
      </Container>
    </Layout>
  );
};

export default Payment;
