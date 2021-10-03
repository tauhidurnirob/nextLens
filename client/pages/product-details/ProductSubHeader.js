import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";

import colors from "../../config/colors";
import { productSelector } from "./../../src/redux/slices/productSlice";

const useStyles = makeStyles((theme) => ({
  container: {
    background: colors.grey,
    padding: `${theme.spacing(2)}px`,
    margin: `0 0 ${theme.spacing(2)}px 0`,
  },
}));

const ProductSubHeader = () => {
  const classes = useStyles();
  const { productById } = useSelector(productSelector);

  return (
    <Container maxWidth={false} className={clsx(classes.container)}>
      <Grid container justifyContent="flex-start" alignItems="center">
        <Typography variant="subtitle2">
          <Box fontWeight="fontWeightBold">
            Home {`>`} {productById?.category} {`>`}
            {productById?.title}
          </Box>
        </Typography>
      </Grid>
    </Container>
  );
};

export default ProductSubHeader;
