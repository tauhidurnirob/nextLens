import React from "react";
import { Grid, makeStyles, Container, Button } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";
import Image from "next/image";
import HistoryIcon from "@material-ui/icons/History";
import { useRouter } from "next/router";

import { Cards } from "./../Re_components";
import { productSelector } from "./../redux/slices/productSlice";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(4)}px 0 10px 0`,
  },
}));

const Products = () => {
  const { products } = useSelector(productSelector);
  const { back } = useRouter();
  const classes = useStyles();
  return (
    <Grid container direction="row" className={clsx(classes.container)}>
      {products.length !== 0 ? (
        products.map((item) => (
          <Grid item key={item.id} container md={4} justifyContent="center">
            <Cards item={item} isProduct width={500} height={500} />
          </Grid>
        ))
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
