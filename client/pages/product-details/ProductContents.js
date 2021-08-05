import React from "react";
import { Container, makeStyles, Grid, Box } from "@material-ui/core";
import clsx from "clsx";

import { Text } from "./../../src/Re_components";
import colors from "../../config/colors";

const useStyles = makeStyles((theme) => ({
  font: {
    color: colors.black,
    cursor: "pointer",
    transition: "0.3s",
    fontWeight: "500",
    letterSpacing: "1px",
    fontSize: "16px",
    padding: "4px 0",
    "&:hover": {
      color: colors.sky,
    },
  },
}));

const ProductContents = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid item container md={8}>
      <Grid container direction="column">
        <Text gutterBottom variant="h6">
          <Box fontWeight="fontWeightBold">{data.title}</Box>
        </Text>
        <Text gutterBottom color="textSecondary" className={clsx(classes.font)}>
          Be the first to review this product
        </Text>
        <Text gutterBottom color="textSecondary">
          As low as ৳{data.price}
        </Text>
      </Grid>
    </Grid>
  );
};

export default ProductContents;
