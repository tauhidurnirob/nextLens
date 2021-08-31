import React, { useState } from "react";
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
  FormHelperText,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useForm } from "react-hook-form";
import productApi from "../../api/posts";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import colors from "../../config/colors";
import ImageUpload from "./ImageUpload";
import ModelDetailsForm from "./ModelDetailsForm";
import productSchema from "./../../schema/productSchema";

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
  // resolver: yupResolver(productSchema)

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        config
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (formData) => {
    // const { ok } = await productApi.postsProduct({
    //   ...formData,
    //   image: data.image,
    //   cloudinary_id: data.public_id,
    // });
    // if (ok) toast.success("Successfully product posted");
  };

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <ToastContainer />
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
            {errors.title && (
              <FormHelperText>
                <Typography style={{ color: "red" }} variant="subtitle2">
                  {errors.title?.message}
                </Typography>
              </FormHelperText>
            )}
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
            {errors.description && (
              <FormHelperText>
                <Typography style={{ color: "red" }} variant="subtitle2">
                  {errors.description?.message}
                </Typography>
              </FormHelperText>
            )}
          </Box>
          {/*  */}
          <ImageUpload
            register={register}
            errors={errors}
            uploadFileHandler={uploadFileHandler}
          />
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
                {errors.price && (
                  <FormHelperText>
                    <Typography style={{ color: "red" }} variant="subtitle2">
                      {errors.price?.message}
                    </Typography>
                  </FormHelperText>
                )}
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
                {errors.salesPrice && (
                  <FormHelperText>
                    <Typography style={{ color: "red" }} variant="subtitle2">
                      {errors.salesPrice?.message}
                    </Typography>
                  </FormHelperText>
                )}
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
                {errors.discount && (
                  <FormHelperText>
                    <Typography style={{ color: "red" }} variant="subtitle2">
                      {errors.discount?.message}
                    </Typography>
                  </FormHelperText>
                )}
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
                {errors.countInStock && (
                  <FormHelperText>
                    <Typography style={{ color: "red" }} variant="subtitle2">
                      {errors.countInStock?.message}
                    </Typography>
                  </FormHelperText>
                )}
              </Box>
            </Grid>
          </Grid>
          {/*  */}
          <ModelDetailsForm register={register} errors={errors} />
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
                {errors.availability && (
                  <FormHelperText>
                    <Typography style={{ color: "red" }} variant="subtitle2">
                      {errors.availability?.message}
                    </Typography>
                  </FormHelperText>
                )}
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
                {errors.type && (
                  <FormHelperText>
                    <Typography style={{ color: "red" }} variant="subtitle2">
                      {errors.type?.message}
                    </Typography>
                  </FormHelperText>
                )}
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
                {errors.category && (
                  <FormHelperText>
                    <Typography style={{ color: "red" }} variant="subtitle2">
                      {errors.category?.message}
                    </Typography>
                  </FormHelperText>
                )}
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
