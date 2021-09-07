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
import CheckoutSteps from "./../../src/Re_components/CheckoutSteps";
import { Layout } from "./../../src/Re_components";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(10)}px 0 10px 0`,
    overflow: "hidden",
    width: "100%",
  },
}));

const index = () => {
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
        <CheckoutSteps step1 step2 step3 />
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

export default index;
