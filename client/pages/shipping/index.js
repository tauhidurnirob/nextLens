import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  FormControl,
  TextField,
  Button,
  Typography,
  FormHelperText,
} from "@material-ui/core";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

import shippingSchema from "../../schema/shippingSchema";
import shippingApi from "../api/shipping";
import colors from "../../config/colors";
import { Layout } from "./../../src/Re_components";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(10)}px 0 10px 0`,
    overflow: "hidden",
    width: "100%",
  },
  form: {
    margin: "10px 0",
  },
  btn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "10px 20px",
    background: colors.black,
    color: colors.white,
    maxWidth: "150px",
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "10px",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.sky,
      color: colors.white,
    },
  },
  errorFont: {
    color: "red",
  },
}));

const Shipping = () => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(shippingSchema) });

  const router = useRouter();

  const onSubmit = async (shippingData) => {
    console.log(shippingData);
    const { ok } = await shippingApi.postShipping(shippingData);
    if (!ok) {
      return toast.error("Something went wrong");
    } else {
      toast.success("Thanks for shipping information");
      setTimeout(() => {
        router.push("/payment");
      }, 2000);
    }
  };

  return (
    <Layout title="Shipping">
      <Container maxWidth="md" className={clsx(classes.container)}>
        <ToastContainer />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="column">
            <FormControl className={clsx(classes.form)} variant="filled">
              <TextField
                id="outlined-Name"
                label="Name"
                variant="outlined"
                inputProps={{
                  ...register("name"),
                }}
              />
            </FormControl>
            {errors.name && (
              <FormHelperText>
                <Typography
                  className={clsx(classes.errorFont)}
                  variant="subtitle2"
                >
                  {errors.name?.message}
                </Typography>
              </FormHelperText>
            )}
            <FormControl className={clsx(classes.form)} variant="filled">
              <TextField
                id="outlined-Email"
                label="Email"
                variant="outlined"
                inputProps={{
                  ...register("email"),
                }}
              />
            </FormControl>
            {errors.email && (
              <FormHelperText>
                <Typography
                  className={clsx(classes.errorFont)}
                  variant="subtitle2"
                >
                  {errors.email?.message}
                </Typography>
              </FormHelperText>
            )}
            <FormControl className={clsx(classes.form)} variant="filled">
              <TextField
                id="outlined-Email"
                label="Address"
                variant="outlined"
                inputProps={{
                  ...register("address"),
                }}
              />
            </FormControl>
            {errors.address && (
              <FormHelperText>
                <Typography
                  className={clsx(classes.errorFont)}
                  variant="subtitle2"
                >
                  {errors.address?.message}
                </Typography>
              </FormHelperText>
            )}
            <FormControl className={clsx(classes.form)} variant="filled">
              <TextField
                id="outlined-Email"
                label="Postal Code"
                variant="outlined"
                inputProps={{
                  ...register("postalCode"),
                }}
              />
            </FormControl>
            {errors.postalCode && (
              <FormHelperText>
                <Typography
                  className={clsx(classes.errorFont)}
                  variant="subtitle2"
                >
                  {errors.postalCode?.message}
                </Typography>
              </FormHelperText>
            )}
            <FormControl className={clsx(classes.form)} variant="filled">
              <TextField
                id="outlined-Email"
                label="Country"
                variant="outlined"
                inputProps={{
                  ...register("country"),
                }}
              />
            </FormControl>
            {errors.country && (
              <FormHelperText>
                <Typography
                  className={clsx(classes.errorFont)}
                  variant="subtitle2"
                >
                  {errors.country?.message}
                </Typography>
              </FormHelperText>
            )}
            <Button type="submit" className={clsx(classes.btn)}>
              Submit
            </Button>
          </Grid>
        </form>
      </Container>
    </Layout>
  );
};

export default Shipping;
