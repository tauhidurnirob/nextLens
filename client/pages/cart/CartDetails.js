import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { Heading, Text } from "./../../src/Re_components";

const useStyles = makeStyles((theme) => ({
  container: { padding: "84px 0 0 0 " },
}));

const ModelDetails = ({}) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={clsx(classes.container)}>
      <Heading className={clsx(classes.heading)} isDivider>
        <Text variant="h4">Cart</Text>
      </Heading>
    </Container>
  );
};

export default ModelDetails;
