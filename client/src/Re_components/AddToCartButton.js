import React from "react";
import { makeStyles, Box, IconButton, Button } from "@material-ui/core";
import clsx from "clsx";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";

import {
  addCart,
  cartList,
  removeCart,
} from "../../src/redux/slices/productSlice";
import colors from "../../config/colors";

const useStyles = makeStyles(() => ({
  btn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "10px 20px",
    background: colors.white,
    maxWidth: "220px",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "60px",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.black,
      color: colors.white,
    },
  },
}));

const AddToCartButton = ({ item }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { cart } = useSelector(cartList);
  const inCart = cart?.find((items) => items.id === item.id);

  return !inCart ? (
    <a>
      <Button
        className={clsx(classes.btn)}
        onClick={() => dispatch(addCart(item))}
      >
        Add To Cart
      </Button>
    </a>
  ) : (
    <IconButton
      variant="contained"
      className={clsx(classes.btn)}
      onClick={() => dispatch(removeCart(item.id))}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default AddToCartButton;
