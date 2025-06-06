import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  TextField,
  FormControl,
  Button,
  Paper,
  Typography,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@material-ui/core";
import clsx from "clsx";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

import colors from "../../config/colors";
import { Heading } from "../../src/Re_components";
import { registerAction } from "../../src/redux/slices/authSlice";
import authApi from "../api/auth";
import registerSchema from "../../schema/registerSchema";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    width: "100%",
  },
  heading: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  form: {
    margin: "10px 0",
  },
  font: {
    color: colors.black,
    cursor: "pointer",
    transition: "0.3s",
    fontWeight: "500",
    letterSpacing: "1px",
    fontSize: "14px",
    padding: "4px 0",
    marginBottom: "10px",
    "&:hover": {
      color: colors.sky,
    },
  },
  btn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "10px 20px",
    background: colors.black,
    color: colors.white,
    fontWeight: "bold",
    width: "150px",
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

const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = async ({ name, email, password }) => {
    const { data, ok } = await authApi.registerAuth(name, email, password);
    if (!ok) {
      return toast.error("User already exists");
    } else {
      toast.success("Successfully registered");
      dispatch(registerAction(data));
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Paper className={clsx(classes.paper)}>
      <Heading className={clsx(classes.heading)} isDivider>
        <Typography variant="h5">Register</Typography>
        <ToastContainer />
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column">
          <FormControl className={clsx(classes.form)} variant="filled">
            <TextField
              id="outlined-Name"
              label="Name"
              variant="outlined"
              inputProps={{ ...register("name") }}
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
              inputProps={{ ...register("email") }}
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

          <FormControl className={clsx(classes.form)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    {showPassword ? (
                      <Visibility onClick={() => setShowPassword(false)} />
                    ) : (
                      <VisibilityOff onClick={() => setShowPassword(true)} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
              inputProps={{ ...register("password") }}
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
          <FormControl className={clsx(classes.form)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-confirm-passwor">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirm-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    {showPassword ? (
                      <Visibility onClick={() => setShowPassword(false)} />
                    ) : (
                      <VisibilityOff onClick={() => setShowPassword(true)} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={130}
              inputProps={{ ...register("confirmPassword") }}
            />
          </FormControl>
          {errors.confirmPassword && (
            <FormHelperText>
              <Typography
                className={clsx(classes.errorFont)}
                variant="subtitle2"
              >
                {errors.confirmPassword?.message}
              </Typography>
            </FormHelperText>
          )}
          <FormHelperText>
            <Link href="/login">
              <Typography className={clsx(classes.font)} variant="subtitle1">
                Don you have an account?
              </Typography>
            </Link>
          </FormHelperText>
          <Grid container justifyContent="center">
            <Button type="submit" className={clsx(classes.btn)}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Register;
