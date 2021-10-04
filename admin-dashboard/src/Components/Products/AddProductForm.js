import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Box,
  Paper,
  FormControl,
  TextField,
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

import colors from "../../config/colors";
import ImageUpload from "./ImageUpload";
import ModelDetailsForm from "./ModelDetailsForm";
import productSchema from "./../../schema/productSchema";
import ProductTypes from "./ProductTypes";

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

  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(productSchema) });

  const uploadFileHandler = async (e) => {
    // const file = e.target.files[0];
    // const formData = new FormData();
    // formData.append("image", file);

    // try {
    //   const config = {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   };

    //   const { data } = await axios.post(
    //     "http://localhost:5000/api/upload",
    //     formData,
    //     config
    //   );
    //   // setImage(data);
    //   console.log("data", data);
    // } catch (error) {
    //   console.error(error);
    // }
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const onSubmit = async (formData) => {
    const { ok } = await productApi.postsProduct({
      ...formData,
      imageUri: image,
    });
    if (ok) toast.success("Successfully product posted");
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
          <ProductTypes register={register} errors={errors} />
          {/*  */}
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
