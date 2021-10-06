import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Box,
  Paper,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import AddIcon from "@material-ui/icons/Add";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import colors from "../../config/colors";
import productApi from "../../api/products";
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
  btn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "10px 20px",
    minWidth: "220px",
    letterSpacing: "2px",
    borderRadius: 0,
    borderColor: "2px solid #222",
    fontSize: "16px",
    fontWeight: "bold",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.green,
      color: colors.white,
    },
  },
  gridItem: {
    width: "100%",
  },
}));

const Product = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const { allProduct } = useSelector(adminProductSelector);

  useEffect(() => {
    const getProductBySearch = async () => {
      if (search || category) {
        const { data } = await productApi.getQueryProducts(search, category);
        dispatch(allProductAction(data));
      }
    };

    if (!search && !category) {
      const getProducts = async () => {
        const { data, ok } = await productApi.getAllProductByLimit(12);
        if (ok) dispatch(allProductAction(data));
      };
      getProducts();
    }

    getProductBySearch();
  }, [dispatch, search, category]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handlePriceChange = (e) => {
    let product = [...allProduct];
    if (e.target.value === 0) {
      let shuffled = product
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
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
    <>
      <Box mt={2} mb={2}>
        <Grid container justifyContent="flex-end">
          <Button
            className={clsx(classes.btn)}
            variant="contained"
            color="primary"
            startIcon={<AddIcon style={{ fontSize: "25px" }} />}
            component={NavLink}
            to="/product/add-product"
          >
            Add Product
          </Button>
        </Grid>
      </Box>
      <Paper className={clsx(classes.root)}>
        <form>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Grid item md={4} className={clsx(classes.gridItem)}>
              <FormControl
                variant="outlined"
                className={clsx(classes.formControl)}
              >
                <InputLabel id="category">Category</InputLabel>
                <Select
                  onChange={handleCategoryChange}
                  labelId="category"
                  id="category"
                  label="Category"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {categories?.map((item, index) => (
                    <MenuItem key={index} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4} className={clsx(classes.gridItem)}>
              <FormControl
                variant="outlined"
                className={clsx(classes.formControl)}
              >
                <InputLabel id="price">Price</InputLabel>
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
            <Grid item md={4} className={clsx(classes.gridItem)}>
              <FormControl className={clsx(classes.formControl)}>
                <TextField
                  id="outlined-search"
                  label="Search"
                  variant="outlined"
                  name="search"
                  value={search}
                  onChange={handleSearchChange}
                />
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default Product;

const price = [{ name: "Highest to Lowest" }, { name: "Lowest to Highest" }];

const categories = [
  { name: "Man" },
  { name: "Women" },
  { name: "Kid" },
  { name: "Eyeglasses" },
  { name: "Sunglasses" },
  { name: "Blue Light Block Glass" },
];
