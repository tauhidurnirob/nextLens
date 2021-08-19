import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
// import useApi from "./../hooks/useApi";
// import postsApi from "../api/posts";
import DashboardBar from "./DashboardBar";
import DashboardCard from "./DashboardCard";

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
      <Grid container justifyContent="center">
        <Grid item container md={12}>
          <DashboardBar />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item container md={12}>
          <DashboardCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
