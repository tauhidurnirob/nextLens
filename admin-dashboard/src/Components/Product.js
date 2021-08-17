import React from "react";
import {
  Container,
  makeStyles,
  Box,
  Paper,
  FormControl,
  TextField,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(2) },
  formControl: {
    width: "100%",
    margin: `${theme.spacing(2)}px opx`,
  },
}));

const Product = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Paper className={clsx(classes.root)}>
        <form>
          <Box mb={2}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-name"
                label="Name"
                variant="outlined"
                name="name"
              />
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-Description"
                label="Description"
                variant="outlined"
                multiline
                minRows={4}
                maxRows={8}
              />
            </FormControl>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Product;
