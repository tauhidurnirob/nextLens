import React from "react";
import {
  Container,
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
}));

const Product = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Box mt={2} mb={2}>
        <Grid container justifyContent="flex-end">
          <Button
            className={clsx(classes.btn)}
            variant="contained"
            color="primary"
            startIcon={<AddIcon style={{ fontSize: "25px" }} />}
            component={NavLink}
            to="/product/add-product"
          >
            Add Product
          </Button>
        </Grid>
      </Box>
      <Paper className={clsx(classes.root)}>
        <form>
          <Box mb={2}>
            <FormControl
              variant="outlined"
              className={clsx(classes.formControl)}
            >
              <InputLabel id="type">Type</InputLabel>
              <Select labelId="type" id="type" label="Type">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {types?.map((item, index) => (
                  <MenuItem key={index} value={index + 1}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box mb={2}>
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
          </Box>
          <Box mb={2}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-name"
                label="Name"
                variant="outlined"
                name="name"
              />
            </FormControl>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Product;

const types = [
  { name: "Grocery" },
  { name: "Women Cloths" },
  { name: "Bags" },
  { name: "Makeup" },
];

const categories = [
  { name: "Frame Only" },
  { name: "Basic Lens" },
  { name: "Standard Lens" },
  { name: "Premium Standard Lens" },
  { name: "Blue Light Block Glass" },
  { name: "Anti Fog Lens" },
];
