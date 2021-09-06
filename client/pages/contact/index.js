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

import contactSchema from "../../schema/contactSchema";
import contactApi from "../api/contact";
import colors from "../../config/colors";
import { Heading, Layout } from "./../../src/Re_components";

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

const Contact = () => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema) });

  const router = useRouter();

  const onSubmit = async (contactData) => {
    const { ok } = await contactApi.postContact(contactData);
    if (!ok) {
      return toast.error("Something went wrong");
    } else {
      toast.success("Thanks! Check your email");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  };

  return (
    <Layout title="contact">
      <Container maxWidth="md" className={clsx(classes.container)}>
        <Grid container justifyContent="center">
          <Heading isDivider>
            <Typography variant="h5">Contact</Typography>
            <ToastContainer />
          </Heading>
        </Grid>
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
            <FormControl>
              <TextField
                id="outlined-Description"
                label="Description"
                variant="outlined"
                multiline
                minRows={4}
                maxRows={8}
                inputProps={{
                  ...register("description"),
                }}
              />
            </FormControl>
            {errors.description && (
              <FormHelperText>
                <Typography
                  className={clsx(classes.errorFont)}
                  variant="subtitle2"
                >
                  {errors.description?.message}
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

export default Contact;
