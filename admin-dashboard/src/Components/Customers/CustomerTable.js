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

import { useSelector } from "react-redux";
import { adminProductSelector } from "../../redux/slices/productSlice";

const useStyles = makeStyles((theme) => ({
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
  font: {
    cursor: "pointer",
    fontWeight: "bold",
    "&:hover": {
      fontWeight: "bold",
      color: theme.palette.primary.main,
    },
  },
}));

const CustomerTable = () => {
  const classes = useStyles();

  const { allProduct } = useSelector(adminProductSelector);

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
                <Box fontWeight="fontWeightBold">Category</Box>
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle1">
                <Box fontWeight="fontWeightBold">Color</Box>
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle1">
                <Box fontWeight="fontWeightBold">Price</Box>
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allProduct.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                <Box fontWeight="fontWeightBold">{row.sku}</Box>
              </TableCell>
              <TableCell align="center">
                <img
                  src={row.image}
                  alt={row.title}
                  className={clsx(classes.imageList)}
                />
              </TableCell>
              <TableCell align="center" className={clsx(classes.font)}>
                {row.title}
              </TableCell>
              <TableCell align="center">
                <Box fontWeight="fontWeightBold">
                  {row?.category.toUpperCase()}
                </Box>
              </TableCell>
              <TableCell align="center">
                <Box fontWeight="fontWeightBold">
                  {row?.color ? row?.color.toUpperCase() : "EMPTY"}
                </Box>
              </TableCell>
              <TableCell align="center">
                <Box fontWeight="fontWeightBold">${row.price}</Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;
