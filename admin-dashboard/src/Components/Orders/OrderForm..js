import React from "react";
import {
  makeStyles,
  Paper,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(2) },
  formControl: {
    width: "100%",
    margin: `${theme.spacing(2)}px opx`,
  },
  gridItem: {
    width: "100%",
  },
}));

const OrderForm = () => {
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.root)}>
      <form>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Grid item md={4} className={clsx(classes.gridItem)}>
            <FormControl
              variant="outlined"
              className={clsx(classes.formControl)}
            >
              <InputLabel id="status">Status</InputLabel>
              <Select labelId="status" id="status" label="status">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {status?.map((item, index) => (
                  <MenuItem key={index} value={index + 1}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} className={clsx(classes.gridItem)}>
            <FormControl
              variant="outlined"
              className={clsx(classes.formControl)}
            >
              <InputLabel id="order-limits">Order Limits</InputLabel>
              <Select
                labelId="order-limits"
                id="order-limits"
                label="order-limits"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {orders?.map((item, index) => (
                  <MenuItem key={index} value={index + 1}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} className={clsx(classes.gridItem)}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-search"
                label="Search"
                variant="outlined"
                name="search"
              />
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default OrderForm;

const orders = [
  { name: "Last 7 Orders" },
  { name: "Last 15 Orders" },
  { name: "Last 30 Orders" },
];

const status = [
  { name: "Delivered" },
  { name: "Pending" },
  { name: "Processing" },
  { name: "Failed" },
];
