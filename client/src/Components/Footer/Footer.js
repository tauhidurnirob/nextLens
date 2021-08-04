import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";

import Contact from "./Contact";
import Newsletter from "./Newsletter";

const useStyles = makeStyles((theme) => ({
  container: { padding: `${theme.spacing(4)}px 0 10px 0`, overflow: "hidden" },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <Container className={clsx(classes.container)}>
        <Grid container direction="row" spacing={3}>
          <Newsletter />
          <Contact />
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
