import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";

import { Heading, Text } from "./../../src/Re_components";
import { cartList } from "./../../src/redux/slices/productSlice";
import CartTable from "./CartTable";

const useStyles = makeStyles((theme) => ({
  container: { padding: "84px 0 0 0 " },
}));

const CartDetails = ({}) => {
  const classes = useStyles();

  const { cart } = useSelector(cartList);

  return (
    <Container maxWidth="lg" className={clsx(classes.container)}>
      <Heading className={clsx(classes.heading)} isDivider>
        <Text variant="h4">Cart</Text>
      </Heading>
      <CartTable cartProduct={cart} />
    </Container>
  );
};

export default CartDetails;
