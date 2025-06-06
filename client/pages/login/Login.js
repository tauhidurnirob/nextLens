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
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import loginSchema from "../../schema/loginSchema";

import colors from "../../config/colors";
import { Heading } from "../../src/Re_components";
import { loginAction } from "../../src/redux/slices/authSlice";
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

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = async ({ email, password }) => {
    const { data, ok } = await authApi.loginAuth(email, password);
    if (!ok) {
      return toast.error("Invalid email or password");
    } else {
      toast.success("Successfully logged in");
      dispatch(loginAction(data));
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Paper className={clsx(classes.paper)}>
      <Heading className={clsx(classes.heading)} isDivider>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <ToastContainer />
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
