import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const CheckoutPayment = ({ paymentMethod }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={clsx(classes.container)}>
      <Grid container direction="row">
        <Grid container md={7}>
          <Typography variant="h4" gutterBottom color="textSecondary">
            Shipping
          </Typography>
          <Divider style={{ height: "10px" }} />
        </Grid>
        <Grid container md={5}>
          <Typography variant="h4" gutterBottom>
            {paymentMethod}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPayment;
