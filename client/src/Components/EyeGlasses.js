import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import { Heading } from "./../Re_components";

const useStyles = makeStyles(() => ({
  container: { padding: "20px" },
  heading: { fontSize: 25, fontWeight: "bold" },
}));

const EyeGlasses = () => {
  const classes = useStyles();

  return (
    <Container className={clsx(classes.container)}>
      <Heading className={clsx(classes.heading)} isDivider>
        EYEGLASSES
      </Heading>
    </Container>
  );
};

export default EyeGlasses;
