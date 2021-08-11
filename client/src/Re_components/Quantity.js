import React, { useState, useEffect } from "react";
import {
  Grid,
  FormControl,
  Input,
  Button,
  makeStyles,
  Box,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import colors from "../../config/colors";
import AddToCartButton from "./AddToCartButton";
import { qty } from "../redux/slices/productSlice";
import { cartList } from "./../redux/slices/productSlice";

const useStyles = makeStyles((theme) => ({
  container: { margin: `${theme.spacing(1)}px 0 ${theme.spacing(2)}px 0` },
  btn: {
    padding: "8px 0px ",
    maxWidth: "5px",
  },
  input: {
    height: "40px",
    width: "15px",
    margin: 0,
    color: colors.black,
    fontSize: "16px",
    fontWeight: "bold",
  },
  control: {
    height: "60px",
    border: `2px solid ${colors.black}`,
    padding: "10px",
    borderRadius: "50px",
  },
  addToCart: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "15px 50px",
    background: colors.black,
    color: colors.white,
    fontSize: "16px",
    fontWeight: "bold",
    marginLeft: "20px",
    borderRadius: "50px",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.sky,
      color: colors.white,
    },
  },
  removeBtn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "15px",
    background: colors.black,
    color: colors.white,
    fontSize: "16px",
    fontWeight: "bold",
    marginLeft: "20px",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.sky,
      color: colors.white,
    },
  },
}));

const Quantity = ({ items, isCartTable }) => {
  console.log(items);
  const classes = useStyles();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      qty({
        id: items?.id,
        quantity: count,
        totalPrice: items?.price * count,
      })
    );
  }, [dispatch, items, count]);

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={clsx(classes.container)}
    >
      <Box component="div" className={clsx(classes.control)}>
        <Button
          onClick={() => setCount(count - 1)}
          color="secondary"
          type="submit"
          size="small"
          disabled={count === 1}
          className={clsx(classes.btn)}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <FormControl variant="outlined">
          <Input
            value={Math.abs(count)}
            onChange={(e) => setCount(e.target.value)}
            className={clsx(classes.input)}
            type="number"
            inputProps={{ min: "1" }}
            disableUnderline
          />
        </FormControl>
        <Button
          color="secondary"
          type="submit"
          size="small"
          onClick={() => setCount(count + 1)}
          className={clsx(classes.btn)}
        >
          <AddIcon fontSize="small" />
        </Button>
      </Box>
      {!isCartTable && (
        <AddToCartButton
          item={items}
          className={clsx(classes.addToCart, classes.removeBtn)}
        />
      )}
    </Grid>
  );
};

export default Quantity;
