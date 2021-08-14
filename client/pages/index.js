import React from "react";
import { makeStyles, Box } from "@material-ui/core";

import { default as MainHome } from "../src/Components/Home";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1440px",
    width: "100%",
    padding: "0 10px",
    margin: "0 auto",
    position: "relative",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={clsx(classes.container)}>
      <MainHome />
    </Box>
  );
};

export default Home;
