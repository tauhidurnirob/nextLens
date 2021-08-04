import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";

import Contact from "./Contact";

const useStyles = makeStyles((theme) => ({
  container: { padding: `${theme.spacing(4)}px 0 10px 0` },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <Container className={clsx(classes.container)}>
        <Grid container direction="row">
          <Grid item container md={6}></Grid>
          <Contact />
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
