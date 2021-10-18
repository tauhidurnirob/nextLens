import React, { useEffect } from "react";
import { Container, Box } from "@material-ui/core";

import CustomerTable from "./CustomerTable";
// import CustomerForm from "./CustomerForm";
import { useDispatch } from "react-redux";

import userApi from "../../api/users";
import { userAction } from "../../redux/slices/userSlice";

const Customers = () => {
  document.title = "Customers";

  const dispatch = useDispatch();

  // const [search, setSearch] = useState("");

  useEffect(() => {
    const getUsersData = async () => {
      const { data, ok } = await userApi.getUsers();
      if (ok) dispatch(userAction(data));
    };
    getUsersData();
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      {/* <CustomerForm searchFunc={(value) => setSearch(value)} /> */}
      <Box mt={4} mb={4}>
        <CustomerTable />
      </Box>
    </Container>
  );
};

export default Customers;
