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
import { login } from "../../src/redux/slices/authSlice";
import { useDispatch } from "react-redux";

import colors from "../../config/colors";
import { Heading, ErrorMessage } from "../../src/Re_components";
import authApi from "../api/auth";

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
    margin: "10px 0",
    "&:hover": {
      color: colors.sky,
    },
  },
  errorFont: {
    color: "red",
    padding: "0 0 5px 0",
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
}));

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Minimum 5 digits"),
});

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [loginFailed, setLoginFailed] = useState(false);

  const onSubmit = async ({ email, password }) => {
    const { data, ok } = await authApi.login(email, password);
    if (!ok) return setLoginFailed(true);
    setLoginFailed(false);
    dispatch(login(data));
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Paper className={clsx(classes.paper)}>
      <Heading className={clsx(classes.heading)} isDivider>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <ErrorMessage error="Invalid email or password" visible={loginFailed} />
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column">
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

          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
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

          <FormHelperText>
            <Link href="/register">
              <Typography className={clsx(classes.font)} variant="subtitle1">
                Don't have an account?
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

export default Login;
