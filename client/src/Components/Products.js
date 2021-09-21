import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Container,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";
import Image from "next/image";
import HistoryIcon from "@material-ui/icons/History";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";

import { Cards } from "../Re_components";
import { productSelector } from "../redux/slices/productSlice";
import productApi from "../../pages/api/products";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(4)}px 0 10px 0`,
  },
}));

const Products = () => {
  const { products } = useSelector(productSelector);
  const { back } = useRouter();
  const classes = useStyles();

  const [moreProduct, setMoreProduct] = useState(products);
  const [hasMore, setHasMore] = useState(true);

  const getMoreProduct = async () => {
    const {
      data: { products },
    } = await productApi.getMoreProducts(moreProduct.length, 4);
    setMoreProduct((product) => [...product, ...products]);
    if (moreProduct.length >= 42) {
      setHasMore(false);
    }
  };
  return (
    <Grid container direction="row" className={clsx(classes.container)}>
      {products.length !== 0 ? (
        <InfiniteScroll
          dataLength={moreProduct.length}
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
          <Grid container direction="row">
            {moreProduct.map((item) => (
              <Grid item key={item.id} container md={3} justifyContent="center">
                <Cards item={item} isProduct width={500} height={500} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      ) : (
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Image
              src="/images/oops.png"
              alt="No product found"
              width={500}
              height={500}
            />
          </Grid>
          <Grid container justifyContent="center">
            <Button
              startIcon={<HistoryIcon />}
              variant="outlined"
              color="primary"
              onClick={() => back()}
            >
              Go Back
            </Button>
          </Grid>
        </Container>
      )}
    </Grid>
  );
};

export default Products;
