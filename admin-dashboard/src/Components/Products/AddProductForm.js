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
import { useForm } from "react-hook-form";

import colors from "../../config/colors";
import ImageUpload from "./ImageUpload";
import ModelDetailsForm from "./ModelDetailsForm";

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

const AddProductForm = () => {
  document.title = "Add Product";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
            to="/product"
          />
        </Grid>
      </Box>
      <Paper className={clsx(classes.root)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={2}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-name"
                label="Product Title"
                variant="outlined"
                inputProps={{ ...register("title") }}
              />
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-Description"
                label="Description"
                variant="outlined"
                multiline
                minRows={4}
                maxRows={8}
                inputProps={{ ...register("description") }}
              />
            </FormControl>
          </Box>
          {/*  */}
          <ImageUpload register={register} />
          {/*  */}
          <Grid
            item
            container
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Grid item md={3} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl className={clsx(classes.formControl)}>
                  <TextField
                    id="outlined-price"
                    label="Price"
                    variant="outlined"
                    type="number"
                    inputProps={{ ...register("price") }}
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item md={3} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl className={clsx(classes.formControl)}>
                  <TextField
                    id="outlined-sales-price"
                    label="Sales Price"
                    variant="outlined"
                    type="number"
                    inputProps={{ ...register("salesPrice") }}
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item md={3} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl className={clsx(classes.formControl)}>
                  <TextField
                    id="outlined-discount"
                    label="Discount"
                    variant="outlined"
                    type="number"
                    inputProps={{ ...register("discount") }}
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item md={3} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl className={clsx(classes.formControl)}>
                  <TextField
                    id="outlined-product-countInStock"
                    label="Count In Stock"
                    variant="outlined"
                    type="number"
                    inputProps={{ ...register("countInStock") }}
                  />
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          {/*  */}
          <ModelDetailsForm register={register} />
          {/*  */}
          <Grid container direction="row" spacing={2} justifyContent="center">
            <Grid item md={4} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl
                  variant="outlined"
                  className={clsx(classes.formControl)}
                >
                  <InputLabel id="availability">Availability</InputLabel>
                  <Select
                    labelId="availability"
                    id="availability"
                    label="availability"
                    inputProps={{ ...register("availability") }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {availability?.map((item, index) => (
                      <MenuItem key={index} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item md={4} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl
                  variant="outlined"
                  className={clsx(classes.formControl)}
                >
                  <InputLabel id="type">Type</InputLabel>

                  <Select
                    inputProps={{ ...register("type") }}
                    labelId="type"
                    id="type"
                    label="Type"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {types?.map((item, index) => (
                      <MenuItem key={index} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item md={4} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl
                  variant="outlined"
                  className={clsx(classes.formControl)}
                >
                  <InputLabel id="category">Category</InputLabel>
                  <Select
                    inputProps={{ ...register("category") }}
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
              </Box>
            </Grid>
          </Grid>
          <Box mt={2}>
            <Grid container justifyContent="center">
              <Button
                className={clsx(classes.btn)}
                variant="contained"
                color="primary"
                type="submit"
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

export default AddProductForm;

const types = [
  { name: "Round Frame" },
  { name: "Rectangle Frame" },
  { name: "Rim Less Frame" },
  { name: "Blue Frame" },
];

const categories = [{ name: "Men's" }, { name: "Women's" }, { name: "Kid's" }];
const availability = [{ name: "In Stock " }, { name: "Stock Out" }];
