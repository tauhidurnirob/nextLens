import React, { useEffect } from "react";
import { Container, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";

import OrderForm from "./OrderForm.";
import OrderTable from "./OrderTable";
import orderApi from "../../api/order";
import { orderAction } from "../../redux/slices/orderSlice";

const Orders = () => {
  document.title = "Order";
  const dispatch = useDispatch();

  useEffect(() => {
    const getOrder = async () => {
      const { data } = await orderApi.getAllOrders();
      dispatch(orderAction(data));
    };
    getOrder();
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <OrderForm />
      <Box mt={4} mb={4}>
        <OrderTable />
      </Box>
    </Container>
  );
};

export default Orders;
