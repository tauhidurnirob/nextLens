import React from "react";
import {
  makeStyles,
  Grid,
  TextField,
  FormControl,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import colors from "../../config/colors";
import { Heading } from "../../src/Re_components";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
  heading: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  form: {
    margin: "10px 0",
  },
  btn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "10px 20px",
    background: colors.black,
    color: colors.white,
    maxWidth: "150px",
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "10px",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.sky,
      color: colors.white,
    },
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.paper)}>
      <Heading className={clsx(classes.heading)} isDivider>
        <Typography variant="h5">Login</Typography>
      </Heading>

      <Grid container direction="column">
        <FormControl className={clsx(classes.form)} variant="filled">
          <TextField id="outlined-Name" label="Name" variant="outlined" />
        </FormControl>
        <FormControl className={clsx(classes.form)} variant="filled">
          <TextField id="outlined-Email" label="Email" variant="outlined" />
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-Description"
            label="Description"
            variant="outlined"
            multiline
            minRows={4}
            maxRows={8}
          />
        </FormControl>
        <Grid container justifyContent="center">
          <Button className={clsx(classes.btn)}>Submit</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Login;
