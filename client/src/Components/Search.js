import React from "react";
import { Container, makeStyles, Grid, TextField } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
}));

const Search = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <TextField
        id="outlined-search"
        label="Search..."
        variant="outlined"
        className={clsx(classes.form)}
      />
    </Container>
  );
};

export default Search;
