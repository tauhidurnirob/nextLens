import React, { useState } from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import InfiniteScroll from "react-infinite-scroll-component";

import productApi from "../../pages/api/products";

const Scroll = ({ scrollView, state, setState }) => {
  const [hasMore, setHasMore] = useState(true);

  const getMoreProduct = async () => {
    const {
      data: { products },
    } = await productApi.getMoreProducts(state.length, 14);
    setState((product) => [...product, ...products]);
    if (state.length >= 42) {
      setHasMore(false);
    }
  };
  return (
    <InfiniteScroll
      dataLength={state.length}
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
