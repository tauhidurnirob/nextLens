import React from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";

import RangeSlider from "./RangeSlider";
import FilterByColor from "./FilterByColor";
import FilterByGender from "./FilterByGender";
import FilterByLensType from "./FilterByLenseType";
import FilterByFrameShape from "./FilterByFrameShape";
import FilterByFrameStyle from "./FilterByFrameStyle";
import FilterByShopCollection from "./FilterByShopCollection";
import Cards from "./Cards";
import { productSelector } from "../redux/slices/productSlice";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(4)}px 0 10px 0`,
  },
}));

const CategoryEyeGlassProducts = () => {
  const classes = useStyles();
  const { products } = useSelector(productSelector);

  return (
    <Container maxWidth="lg">
      <Grid container direction="row" className={clsx(classes.container)}>
        <Grid item container md={4}>
          <RangeSlider />
          <FilterByColor />
          <FilterByGender />
          <FilterByLensType />
          <FilterByFrameStyle />
          <FilterByFrameShape />
          <FilterByShopCollection />
        </Grid>
        <Grid item container md={8}>
          {products?.map((item) => (
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
