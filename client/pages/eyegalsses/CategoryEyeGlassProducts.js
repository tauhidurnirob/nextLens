import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { Cards } from "../../src/Re_components";
import products from "../../fakeData/products";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(4)}px 0 10px 0`,
  },
}));

const CategoryEyeGlassProducts = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" className={clsx(classes.container)}>
      <Grid item container md={4}></Grid>
      <Grid item container md={8}>
        {products.map((item) => (
          <Grid item key={item.id} container md={4} justifyContent="center">
            <Cards item={item} isProduct width={300} height={300} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default CategoryEyeGlassProducts;
