import React from "react";
import { makeStyles, Box } from "@material-ui/core";

import Navigation from "../src/Components/Navigation/Navigation";
import { default as MainHome } from "../src/Components/Home";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1440px",
    width: "100%",
    padding: "0 10px",
    margin: "0 auto",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={clsx(classes.container)}>
      <Navigation />
      <MainHome />
    </Box>
  );
};

export default Home;
