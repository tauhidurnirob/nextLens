import React from "react";
import {
  makeStyles,
  Paper,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@material-ui/core";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import {
  adminProductSelector,
  allProductAction,
} from "../../redux/slices/productSlice";

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(2) },
  formControl: {
    width: "100%",
    margin: `${theme.spacing(2)}px opx`,
  },

  gridItem: {
    width: "100%",
  },
}));

const CustomerForm = ({ searchFunc }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { allProduct } = useSelector(adminProductSelector);

  const handleSearchChange = (e) => {
    searchFunc(e.target.value);
  };

  const handlePriceChange = (e) => {
    let product = [...allProduct];
    if (e.target.value === 0) {
      let shuffled = product
        .map((products) => ({ products, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ products }) => products);
      dispatch(allProductAction(shuffled));
    }
    if (e.target.value === 1) {
      product?.sort((a, b) => {
        return b.price - a.price;
      });
      dispatch(allProductAction(product));
    }
    if (e.target.value === 2) {
      product?.sort((a, b) => {
        return a.price - b.price;
      });
      dispatch(allProductAction(product));
    }
  };

  return (
    <Paper className={clsx(classes.root)}>
      <form>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Grid item md={6} className={clsx(classes.gridItem)}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-search"
                label="Search"
                variant="outlined"
                name="search"
                onChange={handleSearchChange}
              />
            </FormControl>
          </Grid>

          <Grid item md={6} className={clsx(classes.gridItem)}>
            <FormControl
              variant="outlined"
              className={clsx(classes.formControl)}
            >
              <InputLabel id="price">Order</InputLabel>
              <Select
                onChange={handlePriceChange}
                labelId="price"
                id="price"
                label="price"
              >
                <MenuItem value={0}>
                  <em>None</em>
                </MenuItem>
                {price?.map((item, index) => (
                  <MenuItem key={index} value={index + 1}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CustomerForm;

const price = [{ name: "Highest to Lowest" }, { name: "Lowest to Highest" }];
