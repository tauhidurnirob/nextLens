import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  Typography,
  Divider,
  Box,
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
        <Grid item container md={7}>
          <Grid container direction="column">
            <Typography variant="h4" gutterBottom color="textSecondary">
              SHIPPING
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <Box fontWeight="fontWeightBold">Address :</Box>
            </Typography>
          </Grid>
          <Divider style={{ marginBottom: "20px", width: "90%" }} />
        </Grid>
        <Grid item container md={7}>
          <Grid container direction="column">
            <Typography variant="h4" gutterBottom color="textSecondary">
              PAYMENT METHOD
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <Box fontWeight="fontWeightBold">Method : {paymentMethod}</Box>
            </Typography>
          </Grid>
          <Divider style={{ marginBottom: "20px", width: "90%" }} />
        </Grid>
        <Grid item container md={7}>
          <Grid container direction="column">
            <Typography variant="h4" gutterBottom color="textSecondary">
              ORDER ITEMS
            </Typography>
            <Container maxWidth="lg"></Container>
          </Grid>
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
