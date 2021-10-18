import React, { useEffect } from "react";
import { Container, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";

import DashboardBar from "./DashboardBar";
import DashboardCard from "./DashboardCard";
import adminApi from "../../api/order";
import userApi from "../../api/users";
import { useDispatch } from "react-redux";
import { orderAction } from "../../redux/slices/orderSlice";
import { userAction } from "../../redux/slices/userSlice";
import { adminOrderSelector } from "../../redux/slices/orderSlice";
import { usersSelector } from "../../redux/slices/userSlice";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const Dashboard = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  document.title = "Dashboard";

  const { orders } = useSelector(adminOrderSelector);
  const { users } = useSelector(usersSelector);

  const order = orders?.map((item) => item.history[0]);
  const histories = orders?.map((item) => item.history[0]);
  const salesPrice = histories.map((item) => item.price);
  const revenue = order
    ?.map(({ price }) => price)
    .reduce((acc, cc) => acc + cc, 0);

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
      <DashboardCard orders={orders} revenue={revenue} users={users} />
      <DashboardBar salesPrice={salesPrice} revenue={revenue} />
    </Container>
  );
};

export default Dashboard;
