import React, { useState } from "react";
import { Grid, makeStyles, Container, Button } from "@material-ui/core";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import HistoryIcon from "@material-ui/icons/History";
import { useRouter } from "next/router";

import { Cards, Scroll } from "../Re_components";
import { productSelector } from "../redux/slices/productSlice";
import productApi from "../../pages/api/products";
import { setProducts } from "../redux/slices/productSlice";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(4)}px 0 10px 0`,
  },
}));

const Products = () => {
  const { products } = useSelector(productSelector);
  const { back } = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [hasMore, setHasMore] = useState(true);

  const getMoreProduct = async () => {
    const { data } = await productApi.getMoreProducts(products.length, 12);
    dispatch(setProducts(data?.products));

    if (data?.products.length === 0) {
      setHasMore(false);
    }
  };

  return (
    <Grid container direction="row" className={clsx(classes.container)}>
      {products.length !== 0 ? (
        <Scroll
          pLength={products.length}
          getMoreProduct={getMoreProduct}
          hasMore={hasMore}
          scrollView={
            <Grid container direction="row">
              {products?.map((item) => (
                <Grid
                  item
                  key={item.id}
                  container
                  md={3}
                  justifyContent="center"
                >
                  <Cards item={item} isProduct width={500} height={500} />
                </Grid>
              ))}
            </Grid>
          }
        />
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
