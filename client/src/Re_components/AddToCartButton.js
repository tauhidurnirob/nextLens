import React from "react";
import { IconButton, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";

import {
  addCart,
  productList,
  removeCart,
} from "../../src/redux/slices/productSlice";

const AddToCartButton = ({ item, iconStyle, ...otherProps }) => {
  const dispatch = useDispatch();

  const { cart } = useSelector(productList);
  const inCart = cart?.find((items) => items._id === item?._id);

  return !inCart ? (
    <a>
      <Button {...otherProps} onClick={() => dispatch(addCart(item))}>
        Add To Cart
      </Button>
    </a>
  ) : (
    <IconButton
      variant="contained"
      {...otherProps}
      onClick={() => dispatch(removeCart(item._id))}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default AddToCartButton;
