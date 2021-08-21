import React from "react";
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
} from "@material-ui/core";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import clsx from "clsx";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(id, deliveryAddress, paymentMethod, status) {
  return {
    id,
    deliveryAddress,
    paymentMethod,
    status,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        contact: "715-371-3507",
        price: 399,
      },
      {
        date: "2020-01-02",
        customerId: "11091700",
        contact: "715-371-3507",
        price: 399,
      },
    ],
  };
}

const Row = ({ row }) => {
  const [open, setOpen] = React.useState(false);
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
          {row.id}
        </TableCell>
        <TableCell align="center">{row.deliveryAddress}</TableCell>
        <TableCell align="center">{row.paymentMethod}</TableCell>
        <TableCell align="center">{row.status}</TableCell>
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
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="center">{historyRow.contact}</TableCell>
                      <TableCell align="center">${historyRow.price}</TableCell>
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

const rows = [
  createData(
    14,
    "29 Eve Street, 543 Evenue Road, Ny 87876",
    "Cash On Delivery",
    "Processing"
  ),
  createData(
    14,
    "29 Eve Street, 543 Evenue Road, Ny 87876",
    "Cash On Delivery",
    "Processing"
  ),
  createData(
    14,
    "29 Eve Street, 543 Evenue Road, Ny 87876",
    "Cash On Delivery",
    "Processing"
  ),

  createData(
    14,
    "29 Eve Street, 543 Evenue Road, Ny 87876",
    "Cash On Delivery",
    "Processing"
  ),
  createData(
    14,
    "29 Eve Street, 543 Evenue Road, Ny 87876",
    "Cash On Delivery",
    "Processing"
  ),
  createData(
    14,
    "29 Eve Street, 543 Evenue Road, Ny 87876",
    "Cash On Delivery",
    "Processing"
  ),
  createData(
    14,
    "29 Eve Street, 543 Evenue Road, Ny 87876",
    "Cash On Delivery",
    "Processing"
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 1024,
  },
  tableContainer: {
    height: "500px",
  },
});

const OrderTable = () => {
  const classes = useStyles();

  return (
    <TableContainer
      stickyHeader
      aria-label="sticky table"
      className={clsx(classes.tableContainer)}
      component={Paper}
    >
      <Table className={clsx(classes.table)} aria-label="collapsible table">
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
                <Box fontWeight="fontWeightBold">Payment Method</Box>
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
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
