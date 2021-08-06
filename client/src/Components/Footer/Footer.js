import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";

import Contact from "./Contact";
import Newsletter from "./Newsletter";
import CopyRight from "./CopyRight";

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: "hidden",
    maxWidth: "1440px",
    width: "100%",
    padding: `${theme.spacing(4)}px 20px`,
    margin: "0 auto",
  },
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
      <CopyRight />
    </footer>
  );
};

export default Footer;
