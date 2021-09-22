import React, { useState } from "react";
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
  let { products } = useSelector(productSelector);

  const arr = products?.map(({ price }) => price);

  const maxPrice = Math.max(...arr);

  const [range, setRange] = useState([0, maxPrice]);

  products = products.filter((f) => f.price >= range[0] && f.price <= range[1]);

  return (
    <Container maxWidth="lg" className={clsx(classes.container)}>
      <Grid container direction="row">
        <Grid direction="column" container md={4}>
          <RangeSlider updateRangeSlider={(val) => setRange(val)} />
          <FilterByColor />
          <FilterByGender />
          <FilterByLensType />
          <FilterByFrameStyle />
          <FilterByFrameShape />
          <FilterByShopCollection />
        </Grid>
        <Grid direction="row" container md={8}>
          {products?.map((item) => (
            <Grid item key={item.id} container md={4}>
              <Cards item={item} isProduct width={400} height={400} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CategoryEyeGlassProducts;
