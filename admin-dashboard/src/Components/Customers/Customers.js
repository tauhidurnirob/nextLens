import React, { useEffect, useState } from "react";
import { Container, Box } from "@material-ui/core";

import CustomerTable from "./CustomerTable";
import CustomerForm from "./CustomerForm";
import { useDispatch } from "react-redux";

import { allProductAction } from "../../redux/slices/productSlice";
import productApi from "../../api/products";

const Customers = () => {
  document.title = "Customers";

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const getProductBySearch = async () => {
      if (search) {
        const { data } = await productApi.getQueryProducts(search, "");
        dispatch(allProductAction(data));
      }
    };

    if (!search) {
      const getProducts = async () => {
        const { data, ok } = await productApi.getAllProductByLimit(12);
        if (ok) dispatch(allProductAction(data));
      };
      getProducts();
    }

    getProductBySearch();
  }, [dispatch, search]);

  return (
    <Container maxWidth="lg">
      <CustomerForm searchFunc={(value) => setSearch(value)} />
      <Box mt={4} mb={4}>
        <CustomerTable />
      </Box>
    </Container>
  );
};

export default Customers;
