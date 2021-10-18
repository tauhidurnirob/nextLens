import React, { useEffect } from "react";
import { Container, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import DashboardBar from "./DashboardBar";
import DashboardCard from "./DashboardCard";
import adminApi from "../../api/order";
import userApi from "../../api/users";
import { useDispatch } from "react-redux";
import { orderAction } from "../../redux/slices/orderSlice";
import { userAction } from "../../redux/slices/userSlice";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const Dashboard = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  document.title = "Dashboard";

  useEffect(() => {
    const getDashboardContent = async () => {
      const { data } = await adminApi.getAllAdminProduct();
      const { data: user } = await userApi.getUsers();
      dispatch(orderAction(data));
      dispatch(userAction(user));
    };
    getDashboardContent();
  }, [dispatch]);

  return (
    <Container maxWidth="lg" className={clsx(classes.container)}>
      <DashboardCard />
      <DashboardBar />
    </Container>
  );
};

export default Dashboard;
