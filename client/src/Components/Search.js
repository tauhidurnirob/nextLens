import React from "react";
import {
  Container,
  makeStyles,
  InputLabel,
  FormControl,
  OutlinedInput,
} from "@material-ui/core";
import clsx from "clsx";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: "20px",
  },
}));

const Search = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
      >
        <InputLabel htmlFor="filled-adornment-password">Search...</InputLabel>
        <OutlinedInput
          id="filled-adornment-search"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Search visibility"
                //   onClick={handleClickShowPassword}
                edge="end"
              >
                <CancelOutlinedIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Container>
  );
};

export default Search;
