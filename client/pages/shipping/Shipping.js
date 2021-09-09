import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Grid,
  FormControl,
  TextField,
  Button,
  Typography,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  Box,
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

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(2)}px 0 10px 0`,
    overflow: "hidden",
    width: "100%",
  },
  form: {
    margin: "10px 0",
    width: "100%",
  },
  gridItem: { width: "100%" },
  btn: {
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

const Shipping = ({ setBilling }) => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(shippingSchema) });

  const router = useRouter();

  const [account, setAccount] = useState(false);
  const onSubmit = async (shippingData) => {
    console.log(shippingData);
    const { ok } = await shippingApi.postShipping(shippingData);
    if (!ok) {
      return toast.error("Something went wrong");
    } else {
      setBilling(true);
      toast.success("Thanks for shipping information");
      // setTimeout(() => {
      //   router.push("/payment");
      // }, 2000);
    }
  };

  return (
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
          <Grid container direction="row" spacing={2}>
            <Grid item container md={6} className={clsx(classes.gridItem)}>
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
            </Grid>

            <Grid item container md={6} className={clsx(classes.gridItem)}>
              <FormControl className={clsx(classes.form)} variant="filled">
                <TextField
                  id="outlined-Email"
                  label="Phone"
                  variant="outlined"
                  inputProps={{
                    ...register("phone"),
                  }}
                />
              </FormControl>
              {errors.phone && (
                <FormHelperText>
                  <Typography
                    className={clsx(classes.errorFont)}
                    variant="subtitle2"
                  >
                    {errors.phone?.message}
                  </Typography>
                </FormHelperText>
              )}
            </Grid>
          </Grid>
          <FormControlLabel
            control={
              <Box ml={2}>
                <Checkbox
                  checked={account}
                  onClick={() => setAccount(!account)}
                  name="account"
                />
              </Box>
            }
            label="With Create Account"
          />
          {account && (
            <>
              <FormControl className={clsx(classes.form)} variant="filled">
                <TextField
                  id="outlined-Email"
                  label="password"
                  variant="outlined"
                  inputProps={{
                    ...register("password"),
                  }}
                />
              </FormControl>
              {errors.password && (
                <FormHelperText>
                  <Typography
                    className={clsx(classes.errorFont)}
                    variant="subtitle2"
                  >
                    {errors.password?.message}
                  </Typography>
                </FormHelperText>
              )}
            </>
          )}
          <Grid container direction="row" spacing={2}>
            <Grid item container md={6} className={clsx(classes.gridItem)}>
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
            </Grid>
            <Grid item container md={6} className={clsx(classes.gridItem)}>
              <FormControl className={clsx(classes.form)} variant="filled">
                <TextField
                  id="outlined-Email"
                  label="Zip Code"
                  variant="outlined"
                  inputProps={{
                    ...register("zipCode"),
                  }}
                />
              </FormControl>
              {errors.zipCode && (
                <FormHelperText>
                  <Typography
                    className={clsx(classes.errorFont)}
                    variant="subtitle2"
                  >
                    {errors.zipCode?.message}
                  </Typography>
                </FormHelperText>
              )}
            </Grid>
          </Grid>

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
          <FormControl className={clsx(classes.form)}>
            <TextField
              id="outlined-Description"
              label="Order Notes"
              variant="outlined"
              multiline
              minRows={4}
              maxRows={8}
              inputProps={{ ...register("Order Notes") }}
            />
          </FormControl>
          <Button type="submit" className={clsx(classes.btn)}>
            Submit
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default Shipping;
