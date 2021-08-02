import React from "react";
import { Container, Grid, Divider, Box, makeStyles } from "@material-ui/core";
import Text from "./Text";
import colors from "../../config/colors";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  divider: {
    backgroundColor: colors.black,
    height: 2,
    width: 100,
  },
}));

const Heading = ({ children, isDivider, ...otherProps }) => {
  const classes = useStyles();
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Text {...otherProps}>{children}</Text>
        {isDivider && <Box component="div" className={clsx(classes.divider)} />}
      </Grid>
    </Container>
  );
};

export default Heading;
