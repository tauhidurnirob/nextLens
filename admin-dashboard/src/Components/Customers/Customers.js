import React from "react";
import { Container, Box } from "@material-ui/core";

import CustomerTable from "./CustomerTable";
import CustomerForm from "./CustomerForm";

const Customers = () => {
  document.title = "Customers";

  return (
    <Container maxWidth="lg">
      <CustomerForm />
      <Box mt={4} mb={4}>
        <CustomerTable />
      </Box>
    </Container>
  );
};

export default Customers;
