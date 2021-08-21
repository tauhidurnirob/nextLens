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
import { NavLink } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

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
  uploadBtn: {
    width: "100%",
    padding: "15px 0px",
  },
  gridItem: {
    width: "100%",
  },
  input: {
    display: "none",
  },
}));

const AddCategoryForm = () => {
  document.title = "Add Category";

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Box mt={2} mb={2}>
        <Grid container justifyContent="flex-end">
          <Button
            className={clsx(classes.btn)}
            variant="contained"
            color="primary"
            startIcon={<KeyboardBackspaceIcon style={{ fontSize: "25px" }} />}
            component={NavLink}
            to="/category"
          />
        </Grid>
      </Box>
      <Paper className={clsx(classes.root)}>
        <form>
          <Grid
            item
            container
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={12} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl className={clsx(classes.formControl)}>
                  <input
                    accept="image/*"
                    className={clsx(classes.input)}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="outlined"
                      color="primary"
                      component="span"
                      className={clsx(classes.uploadBtn)}
                    >
                      Upload
                    </Button>
                  </label>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Grid item md={6} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl className={clsx(classes.formControl)}>
                  <TextField
                    id="outlined-sales-price"
                    label="Slug"
                    variant="outlined"
                    name="salesPrice"
                    type="text"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item md={6} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl className={clsx(classes.formControl)}>
                  <TextField
                    id="outlined-product-quantity"
                    label="Category Name"
                    variant="outlined"
                    name="quantity"
                    type="text"
                  />
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Grid container direction="row" spacing={2} justifyContent="center">
            <Grid item md={12} className={clsx(classes.gridItem)}>
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
            </Grid>
          </Grid>
          <Box mt={2}>
            <Grid container justifyContent="center">
              <Button
                className={clsx(classes.btn)}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default AddCategoryForm;

const types = [
  { name: "Grocery" },
  { name: "Women Cloths" },
  { name: "Bags" },
  { name: "Makeup" },
];
