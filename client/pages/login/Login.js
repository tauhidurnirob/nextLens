import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Box,
  TextField,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" direction="column">
      <Typography align="center" variant="h5">
        <Box fontWeight="fontWeightBold">Login</Box>
      </Typography>
      <form>
        <Grid item container md={6}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
      </form>
    </Grid>
  );
};

export default Login;
