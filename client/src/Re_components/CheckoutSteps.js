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
            <Box mr={2}>
              <Link href="/register">
                <Button className={clsx(classes.linkButtonHover)}>
                  Sign In
                </Button>
              </Link>
            </Box>
            <Box mr={2}>
              <Link href="/register">
                <Button className={clsx(classes.linkButtonHover)}>
                  Shipping Address
                </Button>
              </Link>
            </Box>
            <Box mr={2}>
              <Link href="/register">
                <Button className={clsx(classes.linkButtonHover)}>
                  Payment
                </Button>
              </Link>
            </Box>
            <Box mr={2}>
              <Link href="/register">
                <Button className={clsx(classes.linkButtonHover)}>
                  Place Order
                </Button>
              </Link>
            </Box>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutSteps;
