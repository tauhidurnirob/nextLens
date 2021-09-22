import React, { useState } from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";

import { setProducts } from "../redux/slices/productSlice";
import productApi from "../../pages/api/products";

const Scroll = ({ scrollView, pLength }) => {
  const dispatch = useDispatch();
  const [hasMore, setHasMore] = useState(true);

  const getMoreProduct = async () => {
    const {
      data: { products },
    } = await productApi.getMoreProducts(pLength, 12);
    dispatch(setProducts(products));
    if (products?.length === 0) {
      setHasMore(false);
    }
  };
  return (
    <InfiniteScroll
      dataLength={pLength}
      next={getMoreProduct}
      hasMore={hasMore}
      endMessage={
        <Grid container justifyContent="center">
          <Typography variant="subtitle2">
            <Box fontWeight="fontWeightBold">Nothing more to show</Box>
          </Typography>
        </Grid>
      }
      loader={
        <Grid container justifyContent="center">
          <Box mt={2} mb={2}>
            <CircularProgress />
          </Box>
        </Grid>
      }
    >
      {scrollView}
    </InfiniteScroll>
  );
};

export default Scroll;
