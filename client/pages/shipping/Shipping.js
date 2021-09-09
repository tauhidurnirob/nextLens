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
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

import ShippingSchema from "../../schema/ShippingSchema";
import shippingApi from "../api/shipping";
import authApi from "../api/auth";
import colors from "../../config/colors";
import { registerAction } from "../../src/redux/slices/authSlice";

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
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(shippingSchema) });

  const [account, setAccount] = useState(false);
  const onSubmit = async (shippingData) => {
    const { ok } = await shippingApi.postShipping(shippingData);
    if (!ok) {
      toast.error("Something went wrong");
    } else {
      setBilling(true);
      toast.success("Thanks for shipping information");
    }

    if (shippingData.withAccount) {
      const { data, ok } = await authApi.registerAuth(
        shippingData.name,
        shippingData.email,
        shippingData.password
      );
      if (!ok) {
        toast.error("User already exists");
      } else {
        toast.success("Successfully registered");
        dispatch(registerAction(data));
      }
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
              <Checkbox
                checked={account}
                onChange={account}
                onClick={() => setAccount(!account)}
                name="account"
                inputProps={{ ...register("withAccount") }}
              />
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
                    ...register("password", { required: account }),
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
          <FormControl variant="outlined" className={clsx(classes.form)}>
            <InputLabel id="location">Location</InputLabel>
            <Select
              inputProps={{ ...register("location") }}
              labelId="location"
              id="location"
              label="location"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {location?.map((item, index) => (
                <MenuItem key={index} value={index + 1}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {errors.location && (
            <FormHelperText>
              <Typography
                className={clsx(classes.errorFont)}
                variant="subtitle2"
              >
                {errors.location?.message}
              </Typography>
            </FormHelperText>
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

const location = [
  { name: "Dhaka" },
  { name: "Chattogram" },
  { name: "Cumilla" },
  { name: "Sylhet" },
];
