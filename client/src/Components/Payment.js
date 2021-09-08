import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Grid,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import clsx from "clsx";
import { Layout } from "../Re_components";

const useStyles = makeStyles((theme) => ({
  container: {},
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
      <Container className={clsx(classes.container)}>
        <Grid container justifyContent="flex-start">
          <FormControl component="fieldset" className={classes.formControl}>
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
