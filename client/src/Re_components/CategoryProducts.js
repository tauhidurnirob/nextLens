import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";

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
import { fetchedProducts, setProducts } from "../redux/slices/productSlice";
import Image from "next/image";

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
  const { products, topProduct, queries } = useSelector(productSelector);

  const dispatch = useDispatch();

  const { price } = Object.assign({}, ...topProduct);

  const [range, setRange] = useState([0, price]);

  useEffect(() => {
    const priceRangeFilter = async () => {
      const { data } = await productApi.getProductsPriceRange(
        range[0],
        range[1]
      );
      dispatch(fetchedProducts(data?.products));
    };
    priceRangeFilter();
  }, [range]);

  useEffect(() => {
    const getAllQueryProduct = async () => {
      if (
        queries?.black ||
        queries?.white ||
        queries?.men ||
        queries?.women ||
        queries?.kid ||
        queries?.frameOnly ||
        queries?.basicLens ||
        queries?.standardLense ||
        queries?.premiumStandardLens ||
        queries?.blueLightBlockGlass ||
        queries?.halfFrame ||
        queries?.fullFrame ||
        queries?.rimless ||
        queries?.round ||
        queries?.retroSquare ||
        queries?.clubMaster ||
        queries?.oval ||
        queries?.rectangle ||
        queries?.catEye ||
        queries?.shopEconomy ||
        queries?.shopPremium
      ) {
        const { data } = await productApi.getAllQueries(
          queries?.black ? "black" : "",
          queries?.white ? "white" : "",
          queries?.men ? "men" : "",
          queries?.women ? "women" : "",
          queries?.kid ? "kid" : "",
          queries?.frameOnly ? "frame" : "",
          queries?.basicLens ? "basic" : "",
          queries?.standardLense ? "standard" : "",
          queries?.premiumStandardLens ? "premium" : "",
          queries?.blueLightBlockGlass ? "blue" : "",
          queries?.halfFrame ? "halfframe" : "",
          queries?.fullFrame ? "fullframe" : "",
          queries?.rimless ? "rimless" : "",
          queries?.round ? "round" : "",
          queries?.retroSquare ? "retrosquare" : "",
          queries?.clubMaster ? "clubmaster" : "",
          queries?.oval ? "oval" : "",
          queries?.rectangle ? "rectangle" : "",
          queries?.catEye ? "cateye" : "",
          queries?.shopEconomy ? "economy" : "",
          queries?.shopPremium ? "premium" : ""
        );
        dispatch(fetchedProducts(data?.products));
      }

      if (
        !queries?.black &&
        !queries?.white &&
        !queries?.men &&
        !queries?.women &&
        !queries?.kid &&
        !queries?.frameOnly &&
        !queries?.basicLens &&
        !queries?.standardLense &&
        !queries?.premiumStandardLens &&
        !queries?.blueLightBlockGlass &&
        !queries?.halfFrame &&
        !queries?.fullFrame &&
        !queries?.rimless &&
        !queries?.round &&
        !queries?.retroSquare &&
        !queries?.clubMaster &&
        !queries?.oval &&
        !queries?.rectangle &&
        !queries?.catEye &&
        !queries?.shopEconomy &&
        !queries?.shopPremium
      ) {
        const { data } = await productApi.getAllProductByLimit(12);
        dispatch(setProducts(data?.products));
      }
    };
    getAllQueryProduct();
  }, [queries]);

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
        {products.length !== 0 ? (
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
            className={clsx(classes.product)}
          >
            <Grid container justifyContent="center">
              <Image
                src="/images/oops.png"
                alt="No product found"
                width={500}
                height={500}
              />
            </Grid>
          </Grid>
        )}

        {/* {products.length <= 6 ? (
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
        )} */}
      </Grid>
    </Container>
  );
};

export default CategoryEyeGlassProducts;
