import React from "react";
import {
  makeStyles,
  Box,
  Paper,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import AddIcon from "@material-ui/icons/Add";
import { NavLink } from "react-router-dom";

import colors from "../../config/colors";

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(2) },
  formControl: {
    width: "100%",
    margin: `${theme.spacing(2)}px opx`,
  },
  btn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "10px 20px",
    minWidth: "220px",
    letterSpacing: "2px",
    borderRadius: 0,
    borderColor: "2px solid #222",
    fontSize: "16px",
    fontWeight: "bold",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.green,
      color: colors.white,
    },
  },
  gridItem: {
    width: "100%",
  },
}));

const CustomerForm = () => {
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
          <Grid item md={6} className={clsx(classes.gridItem)}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-search"
                label="Search"
                variant="outlined"
                name="search"
              />
            </FormControl>
          </Grid>

          <Grid item md={6} className={clsx(classes.gridItem)}>
            <FormControl
              variant="outlined"
              className={clsx(classes.formControl)}
            >
              <InputLabel id="price">Price</InputLabel>
              <Select labelId="price" id="price" label="price">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {price?.map((item, index) => (
                  <MenuItem key={index} value={index + 1}>
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

export default CustomerForm;

const price = [{ name: "Highest to Lowest" }, { name: "Lowest to Highest" }];

const categories = [
  { name: "Frame Only" },
  { name: "Basic Lens" },
  { name: "Standard Lens" },
  { name: "Premium Standard Lens" },
  { name: "Blue Light Block Glass" },
  { name: "Anti Fog Lens" },
];
