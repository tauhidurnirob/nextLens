import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { Heading } from "./../../src/Re_components";

const useStyles = makeStyles((theme) => ({
  container: { padding: `${theme.spacing(6)}px auto` },
}));

const ModelDetails = ({ data }) => {
  const classes = useStyles();

  return (
    <Heading className={clsx(classes.heading)} isDivider>
      Cart
    </Heading>
  );
};

export default ModelDetails;
