import React, { useState } from "react";
import {
  makeStyles,
  Paper,
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import clsx from "clsx";
import moment from "moment";
import { useSelector } from "react-redux";

import { adminOrderSelector } from "../../redux/slices/orderSlice";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 1024,
  },
  tableContainer: {
    height: "500px",
  },
}));

const OrderTable = () => {
  const classes = useStyles();
  const { orders } = useSelector(adminOrderSelector);
  const isDesktopOrLaptop = useMediaQuery("(max-width: 992px)");

  return (
    <TableContainer className={clsx(classes.tableContainer)} component={Paper}>
      <Table
        stickyHeader={!isDesktopOrLaptop}
        aria-label="sticky table"
        className={clsx(classes.table)}
      >
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <Typography variant="subtitle2">
                <Box fontWeight="fontWeightBold">ID</Box>
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle2">
                <Box fontWeight="fontWeightBold">Delivery Address</Box>
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle2">
                <Box fontWeight="fontWeightBold">Payment</Box>
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle2">
                <Box fontWeight="fontWeightBold">Status</Box>
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((item) => (
            <Row key={item._id} item={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  isDelver: {
    color: "#00C58D",
    fontWeight: "bold",
  },
  isProcessing: {
    color: "#666D92",
    fontWeight: "bold",
  },
  isFailed: {
    color: "#FC5C63",
    fontWeight: "bold",
  },

  isPending: { color: "#2067FA", fontWeight: "bold" },
});
const Row = ({ item }) => {
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={clsx(classes.root)}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {item.order_id}
        </TableCell>
        <TableCell align="center">{item.deliveryAddress}</TableCell>
        <TableCell align="center">{item.paymentMethod}</TableCell>
        <TableCell
          align="center"
          className={clsx({
            [classes.isDelver]: item.status === "Delivered",
            [classes.isProcessing]: item.status === "Processing",
            [classes.isPending]: item.status === "Pending",
            [classes.isFailed]: item.status === "Failed",
          })}
        >
          {item.status}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="center">Contact</TableCell>
                    <TableCell align="center">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {item.history.map((historyItem) => (
                    <TableRow key={historyItem.date}>
                      <TableCell component="th" scope="row">
                        {moment(historyItem.date).format("YYYY-MM-DD")}
                      </TableCell>
                      <TableCell>{historyItem.customerId}</TableCell>
                      <TableCell align="center">
                        {historyItem.contact}
                      </TableCell>
                      <TableCell align="center">${historyItem.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
