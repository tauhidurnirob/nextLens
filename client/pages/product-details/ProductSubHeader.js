import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";

import colors from "../../config/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    background: colors.grey,
    padding: `${theme.spacing(2)}px`,
    margin: `0 0 ${theme.spacing(2)}px 0`,
  },
}));

const ProductSubHeader = ({ data }) => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={clsx(classes.container)}>
      <Grid container justifyContent="flex-start">
        <Grid item>Home > {data.title}</Grid>
      </Grid>
    </Container>
  );
};

export default ProductSubHeader;
