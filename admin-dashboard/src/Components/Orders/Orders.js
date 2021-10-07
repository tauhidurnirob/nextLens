import React, { useEffect, useState } from "react";
import { Container, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";

import OrderForm from "./OrderForm.";
import OrderTable from "./OrderTable";
import orderApi from "../../api/order";
import { orderAction } from "../../redux/slices/orderSlice";

const Orders = () => {
  document.title = "Order";
  const dispatch = useDispatch();

  const [status, setStatus] = useState("");
  const [payment, setPayment] = useState("");

  useEffect(() => {
    const getProductBySearch = async () => {
      if (status || payment) {
        const { data } = await orderApi.getQueryOrderProducts(status, payment);
        dispatch(orderAction(data));
      }
    };

    if (!status && !payment) {
      const getAdminProducts = async () => {
        const { data, ok } = await orderApi.getAllOrdersByLimits(12);
        if (ok) dispatch(orderAction(data));
      };
      getAdminProducts();
    }

    getProductBySearch();
  }, [dispatch, status, payment]);

  return (
    <Container maxWidth="lg">
      <OrderForm
        statusFunc={(value) => setStatus(value)}
        paymentFunc={(value) => setPayment(value)}
      />
      <Box mt={4} mb={4}>
        <OrderTable />
      </Box>
    </Container>
  );
};

export default Orders;
