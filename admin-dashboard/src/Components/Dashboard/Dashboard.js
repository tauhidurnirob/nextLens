import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
// import useApi from "./../hooks/useApi";
// import postsApi from "../api/posts";
import DashboardBar from "./DashboardBar";

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
    <Container maxWidth="lg" className={clsx(classes.container)}>
      <DashboardBar />
    </Container>
  );
};

export default Dashboard;
