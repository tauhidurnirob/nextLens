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

import { Text, Quantity } from "./../../src/Re_components";
import colors from "../../config/colors";

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
    fontSize: "16px",
    padding: "4px 0",
    "&:hover": {
      color: colors.sky,
    },
  },
}));

const ProductContents = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid item container md={7}>
      <Grid container direction="column">
        <Text gutterBottom variant="h5">
          <Box fontWeight="fontWeightBold">{data?.title}</Box>
        </Text>
        <Text gutterBottom color="textSecondary" className={clsx(classes.font)}>
          Be the first to review this product
        </Text>
        <Text gutterBottom color="textSecondary" variant="subtitle1">
          As low as ৳{data?.price}
        </Text>
        <FormControl variant="outlined" className={clsx(classes.form)}>
          <InputLabel id="list">List</InputLabel>
          <Select labelId="list" id="list" label="List">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {data?.listType.map((item, index) => (
              <MenuItem key={index} value={index + 1}>
                {item.list}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/*  */}
        <Quantity items={data} />
        {/*  */}
        <Text gutterBottom variant="subtitle1">
          Availability:
          <Box
            component="span"
            ml={1}
            className={clsx({
              [classes.available]: data?.ability === "In stock",
              [classes.availableNot]: data?.ability === "Stock Out",
            })}
          >
            {data?.ability}
          </Box>
        </Text>
        <Text gutterBottom variant="subtitle1">
          Delivery:
          <Box component="span" ml={1} className={clsx(classes.box)}>
            {data?.sizeGuide}
          </Box>
        </Text>
        <Text gutterBottom variant="subtitle1">
          SKU:
          <Box component="span" ml={1} className={clsx(classes.box)}>
            {data?.Sku}
          </Box>
        </Text>
      </Grid>
    </Grid>
  );
};

export default ProductContents;
