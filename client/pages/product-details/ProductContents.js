import React from "react";
import {
  makeStyles,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";

import { Text, Quantity } from "./../../src/Re_components";
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
    fontSize: "12px",
    padding: "4px 0",
    "&:hover": {
      color: colors.sky,
    },
  },
}));

const ProductContents = () => {
  const classes = useStyles();

  const { productById, cart } = useSelector(cartList);

  const findById = cart.find((item) => item.id === productById.id);

  return (
    <Grid item container md={7}>
      <Grid container direction="column">
        <Text gutterBottom variant="h5">
          <Box fontWeight="fontWeightBold">{productById?.title}</Box>
        </Text>
        <Text gutterBottom color="textSecondary" className={clsx(classes.font)}>
          Be the first to review this product
        </Text>
        <Text gutterBottom color="textSecondary" variant="subtitle1">
          As low as ৳{productById?.price}
        </Text>
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
        <Quantity items={findById ? findById : productById} />
        {/*  */}
        <Text gutterBottom variant="subtitle1">
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
        </Text>
        <Text gutterBottom variant="subtitle1">
          Delivery:
          <Box component="span" ml={1} className={clsx(classes.box)}>
            {productById?.sizeGuide}
          </Box>
        </Text>
        <Text gutterBottom variant="subtitle1">
          SKU:
          <Box component="span" ml={1} className={clsx(classes.box)}>
            {productById?.Sku}
          </Box>
        </Text>
      </Grid>
    </Grid>
  );
};

export default ProductContents;
