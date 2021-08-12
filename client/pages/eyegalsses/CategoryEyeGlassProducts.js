import React from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import clsx from "clsx";

import { Cards } from "../../src/Re_components";
import products from "../../fakeData/products";
import RangeSlider from "./RangeSlider";
import FilterByColor from "./FilterByColor";
import FilterByGender from "./FilterByGender";
import FilterByLensType from "./FilterByLenseType";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(4)}px 0 10px 0`,
  },
  grid: {
    [theme.breakpoints.up("md")]: {
      // height: "20px",
    },
  },
}));

const CategoryEyeGlassProducts = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container direction="row" className={clsx(classes.container)}>
        <Grid item container md={4} className={clsx(classes.grid)}>
          <RangeSlider />
          <FilterByColor />
          <FilterByGender />
          <FilterByLensType />
        </Grid>
        <Grid item container md={8}>
          {products.map((item) => (
            <Grid item key={item.id} container md={4} justifyContent="center">
              <Cards item={item} isProduct width={300} height={300} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CategoryEyeGlassProducts;
