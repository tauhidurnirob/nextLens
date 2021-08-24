import React from "react";
import {
  makeStyles,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";

import { Quantity } from "./../../src/Re_components";
import colors from "../../config/colors";
import { cartList } from "./../../src/redux/slices/productSlice";

const useStyles = makeStyles(() => ({
  form: {
    margin: "10px 0 20px 0",
    fontSize: "20px",
  },
  available: {
    color: "green",
  },
  availableNot: {
    color: "red",
  },
  box: { color: colors.font },
  font: {
    color: colors.black,
    cursor: "pointer",
    transition: "0.3s",
    fontWeight: "500",
    letterSpacing: "1px",
    fontSize: "14px",
    padding: "4px 0",
    "&:hover": {
      color: colors.sky,
    },
  },
}));

const ProductContents = () => {
  const classes = useStyles();
  const { productById, cart } = useSelector(cartList);

  const cartProductById = cart.find((item) => item.id === productById.id);

  return (
    <Grid item container md={7}>
      <Grid container direction="column">
        <Typography gutterBottom variant="h5">
          <Box fontWeight="fontWeightBold">{productById?.title}</Box>
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          color="textSecondary"
          className={clsx(classes.font)}
        >
          Be the first to review this product
        </Typography>
        <Typography gutterBottom color="textSecondary" variant="subtitle1">
          As low as
          {cartProductById
            ? ` ৳${cartProductById?.price} * ${cartProductById?.quantity} = ৳${cartProductById?.totalPrice}`
            : `৳${productById?.price}`}
        </Typography>

        <FormControl variant="outlined" className={clsx(classes.form)}>
          <InputLabel id="list">List</InputLabel>
          <Select labelId="list" id="list" label="List">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {productById?.listType?.map((item, index) => (
              <MenuItem key={index} value={index + 1}>
                {item.list}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/*  */}
        <Quantity items={cartProductById ?? productById} />
        {/*  */}
        <Typography gutterBottom variant="subtitle1">
          Availability:
          <Box
            component="span"
            ml={1}
            className={clsx({
              [classes.available]: productById?.ability === "In stock",
              [classes.availableNot]: productById?.ability === "Stock Out",
            })}
          >
            {productById?.ability}
          </Box>
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          Delivery:
          <Box component="span" ml={1} className={clsx(classes.box)}>
            {productById?.sizeGuide}
          </Box>
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          SKU:
          <Box component="span" ml={1} className={clsx(classes.box)}>
            {productById?.sku}
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductContents;
