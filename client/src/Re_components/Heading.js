import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
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
        <Typography {...otherProps}>{children}</Typography>
        {isDivider && <Box component="div" className={clsx(classes.divider)} />}
      </Grid>
    </Container>
  );
};

export default Heading;
