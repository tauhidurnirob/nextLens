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
  Box,
} from "@material-ui/core";
import Image from "next/image";
import colors from "../../config/colors";

import clsx from "clsx";
import { AddToCartButton, Quantity } from "../../src/Re_components";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: { marginTop: "24px" },
  removeBtn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "10px 25px",
    background: colors.black,
    color: colors.white,
    fontSize: "16px",
    fontWeight: "bold",
    marginLeft: "20px",
    borderRadius: "50px",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.sky,
      color: colors.white,
    },
  },
});

const CartTable = ({ cartProduct }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={clsx(classes.tableContainer)}>
      <Table className={clsx(classes.table)} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Product</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartProduct.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                <AddToCartButton
                  item={item}
                  className={clsx(classes.removeBtn)}
                />
              </TableCell>
              <TableCell align="center">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={100}
                  width={100}
                />
              </TableCell>
              <TableCell align="center">{item.title}</TableCell>
              <TableCell align="center">
                <Box fontWeight="fontWeightBold">৳{item.price}</Box>
              </TableCell>
              <TableCell align="center">
                <Quantity items={item} isCartTable />
              </TableCell>
              <TableCell align="center">
                <Box style={{ color: colors.sky }} fontWeight="fontWeightBold">
                  ৳{item.price}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
