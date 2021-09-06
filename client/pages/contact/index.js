import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  FormControl,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import colors from "../../config/colors";
import { Heading, Layout } from "./../../src/Re_components";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(10)}px 0 10px 0`,
    overflow: "hidden",
    width: "100%",
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

const Contact = () => {
  const classes = useStyles();

  return (
    <Layout title="contact">
      <Container maxWidth="md" className={clsx(classes.container)}>
        <Grid container justifyContent="center">
          <Heading isDivider>
            <Typography variant="h5">Contact</Typography>
          </Heading>
        </Grid>
        <form>
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
            <Button type="submit" className={clsx(classes.btn)}>
              Submit
            </Button>
          </Grid>
        </form>
      </Container>
    </Layout>
  );
};

export default Contact;
