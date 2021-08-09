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

const useStyles = makeStyles((theme) => ({
  productAddToCart: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },
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

const AddToCartButton = ({ isProduct, item }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { cart } = useSelector(cartList);
  const inCart = cart?.find((items) => items.id === item.id);

  return (
    <Box
      component="div"
      className={clsx({
        [classes.productAddToCart]: isProduct,
      })}
    >
      {!inCart ? (
        <Button
          className={clsx(classes.btn)}
          onClick={() => dispatch(addCart(item))}
        >
          Add To Cart
        </Button>
      ) : (
        <IconButton
          variant="contained"
          className={clsx(classes.btn)}
          onClick={() => dispatch(removeCart(item.id))}
        >
          <DeleteIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default AddToCartButton;
