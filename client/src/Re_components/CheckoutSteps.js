import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  ButtonGroup,
  Box,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  linkButtonHover: {
    transition: "all .5s",
    fontWeight: "bold",
    fontSize: "16px",
    letterSpacing: "1px",
    "&:hover": {
      background: "transparent",
      color: "#91DAFE !important",
    },
  },
}));

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={clsx(classes.container)}>
      <Grid container direction="row" justifyContent="center">
        <Grid item>
          <ButtonGroup color="inherit">
            {step1 ? (
              <Box mr={2}>
                <Link href="/register">
                  <Button className={clsx(classes.linkButtonHover)}>
                    Sign In
                  </Button>
                </Link>
              </Box>
            ) : (
              <Box mr={2}>
                <Button disabled className={clsx(classes.linkButtonHover)}>
                  <strike>Sign In</strike>
                </Button>
              </Box>
            )}

            {step2 ? (
              <Box mr={2}>
                <Link href="/register">
                  <Button className={clsx(classes.linkButtonHover)}>
                    Shipping Address
                  </Button>
                </Link>
              </Box>
            ) : (
              <Box mr={2}>
                <Button disabled className={clsx(classes.linkButtonHover)}>
                  <strike>Shipping Address</strike>
                </Button>
              </Box>
            )}
            {step3 ? (
              <Box mr={2}>
                <Link href="/register">
                  <Button className={clsx(classes.linkButtonHover)}>
                    Payment
                  </Button>
                </Link>
              </Box>
            ) : (
              <Box mr={2}>
                <Button disabled className={clsx(classes.linkButtonHover)}>
                  <strike>Payment</strike>
                </Button>
              </Box>
            )}
            {step4 ? (
              <Box mr={2}>
                <Link href="/register">
                  <Button className={clsx(classes.linkButtonHover)}>
                    Place Order
                  </Button>
                </Link>
              </Box>
            ) : (
              <Box mr={2}>
                <Button disabled className={clsx(classes.linkButtonHover)}>
                  <strike>Place Order</strike>
                </Button>
              </Box>
            )}
          </ButtonGroup>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutSteps;
