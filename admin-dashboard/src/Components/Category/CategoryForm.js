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

const CategoryForm = ({ searchFunc, categoryFunc }) => {
  const classes = useStyles();

  const handleSearchChange = (e) => {
    searchFunc(e.target.value);
  };
  const handleCategoryChange = (e) => {
    categoryFunc(e.target.value);
  };

  return (
    <>
      <Box mt={2} mb={2}>
        <Grid container justifyContent="flex-end">
          <Button
            className={clsx(classes.btn)}
            variant="contained"
            color="primary"
            startIcon={<AddIcon style={{ fontSize: "25px" }} />}
            component={NavLink}
            to="/category/add-category"
          >
            Add Category
          </Button>
        </Grid>
      </Box>
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
              <FormControl
                variant="outlined"
                className={clsx(classes.formControl)}
              >
                <InputLabel id="category">Category </InputLabel>
                <Select
                  onChange={handleCategoryChange}
                  labelId="category"
                  id="category"
                  label="Category"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {categories?.map((item, index) => (
                    <MenuItem key={index} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} className={clsx(classes.gridItem)}>
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
    </>
  );
};

export default CategoryForm;

const categories = [
  { name: "Man" },
  { name: "Women" },
  { name: "Kid" },
  { name: "Eyeglasses" },
  { name: "Sunglasses" },
  { name: "Blue Light Block Glass" },
];
