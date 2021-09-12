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
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import clsx from "clsx";
import { useSelector } from "react-redux";
import Link from "next/link";

import colors from "../../config/colors";
import { AddToCartButton, Quantity } from "../../src/Re_components";
import { productSelector } from "../../src/redux/slices/productSlice";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: { marginTop: "24px" },
  removeBtn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "15px",
    background: colors.black,
    color: colors.white,
    fontSize: "16px",
    fontWeight: "bold",
    marginLeft: "20px",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.sky,
      color: colors.white,
    },
  },
  font: {
    color: colors.black,
    cursor: "pointer",
    transition: "0.3s",
    fontWeight: "500",
    letterSpacing: "1px",
    fontSize: "16px",
    padding: "4px 0",
    textOverflow: "ellipsis",
    width: "250px",
    overflow: "hidden",
    "&:hover": {
      color: colors.sky,
    },
  },
});

const CartTable = () => {
  const classes = useStyles();

  const { cart } = useSelector(productSelector);

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
          {cart.map((item) => (
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
              <TableCell align="center">
                <Link href={`/product-details/${item?.slug}`}>
                  <Typography noWrap variant="subtitle2">
                    <Box fontWeight={500} className={clsx(classes.font)}>
                      {item.title}
                    </Box>
                  </Typography>
                </Link>
              </TableCell>
              <TableCell align="center">
                <Box fontWeight="fontWeightBold">৳{item.price}</Box>
              </TableCell>
              <TableCell align="center">
                <Quantity items={item} isCartTable />
              </TableCell>
              <TableCell align="center">
                <Box style={{ color: colors.sky }} fontWeight="fontWeightBold">
                  ৳{item?.totalPrice}
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
