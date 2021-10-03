import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import { default as RegisterForm } from "./Register";
import { Layout } from "../../src/Re_components";

const useStyles = makeStyles((theme) => ({
  container: { paddingTop: "100px" },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Layout title="Register">
      <Container maxWidth="lg" className={clsx(classes.container)}>
        <Grid container justifyContent="center">
          <Grid item container md={6} lg={6}>
            <RegisterForm />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Login;
