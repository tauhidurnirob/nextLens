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
import { usersSelector } from "../../redux/slices/userSlice";

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

  const { users } = useSelector(usersSelector);

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
                <Box fontWeight="fontWeightBold">Name</Box>
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle1">
                <Box fontWeight="fontWeightBold">Email</Box>
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="subtitle1">
                <Box fontWeight="fontWeightBold">Profile Created</Box>
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                <Box fontWeight="fontWeightBold">{row._id}</Box>
              </TableCell>
              <TableCell align="center" className={clsx(classes.font)}>
                {row.name}
              </TableCell>
              <TableCell align="center">
                <Box fontWeight="fontWeightBold">{row.email}</Box>
              </TableCell>
              <TableCell align="center">
                <Box fontWeight="fontWeightBold">
                  {row?.createdAt.slice(0, 10)}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;
