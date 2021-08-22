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
              <InputLabel id="price">Order</InputLabel>
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
