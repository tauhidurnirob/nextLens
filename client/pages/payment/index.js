import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const index = () => {
  const classes = useStyles();

  return (
    <Container className={clsx(classes.container)}>
      <Grid></Grid>
    </Container>
  );
};

export default index;
