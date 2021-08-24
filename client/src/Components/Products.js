import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";

import { Cards } from "./../Re_components";
import { cartList } from "./../redux/slices/productSlice";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(4)}px 0 10px 0`,
  },
}));

const Products = () => {
  const { products } = useSelector(cartList);

  const classes = useStyles();
  return (
    <Grid container direction="row" className={clsx(classes.container)}>
      {products.map((item) => (
        <Grid item key={item.id} container md={4} justifyContent="center">
          <Cards item={item} isProduct width={500} height={500} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
