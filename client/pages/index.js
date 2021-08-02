import React from "react";
import Navigation from "../src/Components/Navigation/Navigation";
import { makeStyles, Box } from "@material-ui/core";
import { default as MainHome } from "../src/Components/Home";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1440px",
    width: "100%",
    padding: "0 10px",
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
