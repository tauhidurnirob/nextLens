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
              <InputLabel id="category">Category</InputLabel>
              <Select labelId="category" id="category" label="Category">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {categories?.map((item, index) => (
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

const price = [{ name: "Highest to Lowest" }, { name: "Lowest to Highest" }];

const categories = [
  { name: "Frame Only" },
  { name: "Basic Lens" },
  { name: "Standard Lens" },
  { name: "Premium Standard Lens" },
  { name: "Blue Light Block Glass" },
  { name: "Anti Fog Lens" },
];
