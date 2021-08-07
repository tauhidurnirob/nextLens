import React, { useState } from "react";
import {
  Grid,
  FormControl,
  Input,
  Button,
  makeStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import clsx from "clsx";

import colors from "../../config/colors";

const useStyles = makeStyles(() => ({
  btn: {
    padding: "8px 0px ",
  },
  input: {
    height: "40px",
    width: "80px",
    margin: 0,
    color: colors.black,
    outline: 0,
    padding: "0 0 0 15px",
  },
}));

const Quantity = ({ items }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);

  return (
    <Grid container alignItems="center">
      <Button
        onClick={() => setQuantity(quantity - 1)}
        variant="contained"
        color="secondary"
        type="submit"
        size="small"
        disabled={quantity === 0}
        className={clsx(classes.btn)}
      >
        <RemoveIcon fontSize="small" />
      </Button>
      <FormControl variant="outlined">
        <Input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className={clsx(classes.input)}
          type="number"
          inputProps={{ min: "1" }}
          disableUnderline
        />
      </FormControl>
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        size="small"
        // disabled={stock === quantity}
        onClick={() => setQuantity(quantity + 1)}
        className={clsx(classes.btn)}
      >
        <AddIcon fontSize="small" />
      </Button>
      {/* {stock <= quantity && (
        <Alert severity="error" variant="outlined" className="mt-2">
          You reached the maximum available stock {stock}
        </Alert>
      )} */}
    </Grid>
  );
};

export default Quantity;
