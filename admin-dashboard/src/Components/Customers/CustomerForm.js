import React from "react";
import {
  makeStyles,
  Paper,
  FormControl,
  TextField,
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

const CustomerForm = ({ searchFunc }) => {
  const classes = useStyles();

  const handleSearchChange = (e) => {
    searchFunc(e.target.value);
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
          <Grid item md={12} className={clsx(classes.gridItem)}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-search"
                label="Search"
                variant="outlined"
                name="search"
                onChange={handleSearchChange}
              />
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CustomerForm;
