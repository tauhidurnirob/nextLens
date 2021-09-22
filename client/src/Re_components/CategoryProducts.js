import React, { useState, useEffect } from "react";
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
import Scroll from "./Scroll";
import Cards from "./Cards";
import { productSelector } from "../redux/slices/productSlice";
import productApi from "../../pages/api/products";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(4)}px 0 10px 0`,
    position: "relative",
  },
  product: {
    position: "absolute",
    right: 0,
    [theme.breakpoints.down("md")]: {
      position: "static",
    },
  },
}));

const CategoryEyeGlassProducts = () => {
  const classes = useStyles();
  let { products } = useSelector(productSelector);

  const arr = products?.map(({ price }) => price);

  const maxPrice = Math.max(...arr);

  const [range, setRange] = useState([0, maxPrice]);

  useEffect(() => {
    const priceRangeFilter = async () => {
      await productApi.getProductsPriceRange(range[0], range[1]);
    };
    priceRangeFilter();
  }, [range]);

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
        {products.length <= 12 ? (
          <Grid
            direction="row"
            container
            md={8}
            className={clsx({ [classes.product]: products?.length <= 9 })}
          >
            {products?.map((item) => (
              <Grid item key={item.id} container md={4}>
                <Cards item={item} isProduct width={400} height={400} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid
            direction="row"
            container
            md={8}
            className={clsx({ [classes.product]: products?.length <= 9 })}
          >
            <Scroll
              pLength={products.length}
              scrollView={
                <Grid container direction="row">
                  {products?.map((item) => (
                    <Grid item key={item.id} container md={4}>
                      <Cards item={item} isProduct width={400} height={400} />
                    </Grid>
                  ))}
                </Grid>
              }
            />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default CategoryEyeGlassProducts;
