import React from "react";
import { Container, Box } from "@material-ui/core";
import OrderForm from "./OrderForm.";
import OrderTable from "./OrderTable";

const Orders = () => {
  document.title = "Order";

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
