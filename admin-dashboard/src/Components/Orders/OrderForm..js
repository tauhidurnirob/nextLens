import React from "react";
import {
  makeStyles,
  Paper,
  FormControl,
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

const OrderForm = ({ statusFunc, paymentFunc, orderLimitFunc }) => {
  const classes = useStyles();

  const handleStatusChange = (e) => {
    statusFunc(e.target.value);
  };
  const handlePaymentChange = (e) => {
    paymentFunc(e.target.value);
  };
  const handleOrderLimitChange = (e) => {
    if (e.target.value === "") {
      orderLimitFunc("");
    }
    if (e.target.value === "Last 7 Orders") {
      orderLimitFunc(7);
    }
    if (e.target.value === "Last 15 Orders") {
      orderLimitFunc(15);
    }
    if (e.target.value === "Last 30 Orders") {
      orderLimitFunc(30);
    }
  };

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
              <Select
                onChange={handleStatusChange}
                labelId="status"
                id="status"
                label="status"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {status?.map((item, index) => (
                  <MenuItem key={index} value={item.name}>
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
              <InputLabel id="payment-limits">Payment Method</InputLabel>
              <Select
                labelId="payment-limits"
                id="payment-limits"
                label="payment-limits"
                onChange={handlePaymentChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {payMethod?.map((item, index) => (
                  <MenuItem key={index} value={item.name}>
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
                onChange={handleOrderLimitChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {orders?.map((item, index) => (
                  <MenuItem key={index} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
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
const payMethod = [
  { name: "PayPal" },
  { name: "Stripe" },
  { name: "Cash On Delivery" },
];

const status = [
  { name: "Delivered" },
  { name: "Pending" },
  { name: "Processing" },
  { name: "Failed" },
];
