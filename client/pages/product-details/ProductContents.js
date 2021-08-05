import React from "react";
import { Container, makeStyles, Grid, Box } from "@material-ui/core";
import clsx from "clsx";
import Text from "./../../src/Re_components/Text";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const ProductContents = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid item container md={8}>
      <Grid container direction="column">
        <Text gutterBottom>
          <Box fontWeight="fontWeightBold">{data.title}</Box>
        </Text>
        <Text color="textSecondary">
          <Box fontWeight={500}>Be the first to review this product</Box>
        </Text>
      </Grid>
    </Grid>
  );
};

export default ProductContents;
