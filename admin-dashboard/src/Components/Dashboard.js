import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container className={clsx(classes.container)}>
      <Grid>Dashboard</Grid>
    </Container>
  );
};

export default Dashboard;
