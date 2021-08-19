import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
// import useApi from "./../hooks/useApi";
// import postsApi from "../api/posts";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const Dashboard = () => {
  const classes = useStyles();
  // const { data, request } = useApi(postsApi.getPosts);

  // useEffect(() => {
  //   request();
  // }, [data, request]);

  return (
    <Container className={clsx(classes.container)}>
      <Grid>Dashboard</Grid>
    </Container>
  );
};

export default Dashboard;
