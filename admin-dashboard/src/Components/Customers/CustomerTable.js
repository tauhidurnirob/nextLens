import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  imageList: {
    width: 70,
    height: 70,
  },
  tableContainer: {
    height: "500px",
  },
});

function createData(id, image, name, order, amount) {
  return { id, image, name, order, amount };
}

const rows = [
  createData(
    15,
    "https://i.ibb.co/zm0ZmFW/alexa.jpg",
    "Frozen yoghurt",
    30,
    1000
  ),
  createData(
    15,
    "https://i.ibb.co/zm0ZmFW/alexa.jpg",
    "Frozen yoghurt",
    30,
    1000
  ),
  createData(
    15,
    "https://i.ibb.co/zm0ZmFW/alexa.jpg",
    "Frozen yoghurt",
    30,
    1000
  ),
  createData(
    15,
    "https://i.ibb.co/zm0ZmFW/alexa.jpg",
    "Frozen yoghurt",
    30,
    1000
  ),
  createData(
    15,
    "https://i.ibb.co/zm0ZmFW/alexa.jpg",
    "Frozen yoghurt",
    30,
    1000
  ),
];

const CustomerTable = () => {
  const classes = useStyles();

  return (
    <TableContainer className={clsx(classes.tableContainer)} component={Paper}>
      <Table
        stickyHeader
        aria-label="sticky table"
        className={clsx(classes.table)}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1">
                <Box fontWeight="fontWeightBold">ID</Box>
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle1">
                <Box fontWeight="fontWeightBold">Image</Box>
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle1">
                <Box fontWeight="fontWeightBold">Name</Box>
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle1">
                <Box fontWeight="fontWeightBold">Total Order</Box>
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle1">
                <Box fontWeight="fontWeightBold">Total Amount</Box>
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">
                <img
                  src={row.image}
                  alt={row.name}
                  className={clsx(classes.imageList)}
                />
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.order}</TableCell>
              <TableCell align="center">${row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;
