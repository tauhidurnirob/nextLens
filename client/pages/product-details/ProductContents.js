import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import clsx from "clsx";

import { Text } from "./../../src/Re_components";
import colors from "../../config/colors";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: "10px",
  },
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
  console.log(data);
  const classes = useStyles();

  return (
    <Grid item container md={8}>
      <Grid container direction="column">
        <Text gutterBottom variant="h6">
          <Box fontWeight="fontWeightBold">{data.title}</Box>
        </Text>
        <Text gutterBottom color="textSecondary" className={clsx(classes.font)}>
          Be the first to review this product
        </Text>
        <Text gutterBottom color="textSecondary">
          As low as ৳{data.price}
        </Text>
        <FormControl variant="outlined" className={clsx(classes.form)}>
          <InputLabel id="demo-simple-select-outlined-label">Lists</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {data.listType.map((item, index) => (
              <MenuItem key={index} value={index + 1}>
                {item.list}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default ProductContents;
