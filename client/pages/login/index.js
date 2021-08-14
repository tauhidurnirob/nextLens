import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { default as LoginForm } from "./Login";
import { Layout } from "../../src/Re_components";

const useStyles = makeStyles((theme) => ({
  container: { paddingTop: "100px" },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Layout title="Login">
      <Container maxWidth="lg" className={clsx(classes.container)}>
        <LoginForm />
      </Container>
    </Layout>
  );
};

export default Login;
