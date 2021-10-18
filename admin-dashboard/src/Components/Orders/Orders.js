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
  const [orderLimit, setOrderLimit] = useState("");

  useEffect(() => {
    const getProductBySearch = async () => {
      if (status || payment || orderLimit) {
        const { data } = await orderApi.getQueryOrderProducts(
          status,
          payment,
          orderLimit
        );

        dispatch(orderAction(data));
      }
    };

    if (!status && !payment && !orderLimit) {
      const getAdminProducts = async () => {
        const { data, ok } = await orderApi.getAllAdminProduct();

        if (ok) dispatch(orderAction(data));
      };
      getAdminProducts();
    }

    getProductBySearch();
  }, [dispatch, status, payment, orderLimit]);

  return (
    <Container maxWidth="lg">
      <OrderForm
        statusFunc={(value) => setStatus(value)}
        paymentFunc={(value) => setPayment(value)}
        orderLimitFunc={(value) => setOrderLimit(value)}
      />
      <Box mt={4} mb={4}>
        <OrderTable />
      </Box>
    </Container>
  );
};

export default Orders;
