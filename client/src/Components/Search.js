import React from "react";
import {
  Container,
  makeStyles,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import clsx from "clsx";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

const useStyles = makeStyles(() => ({
  form: {
    width: "100%",
    margin: "10px 0",
  },
}));

const Search = ({ setIsSearch }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <FormControl className={clsx(classes.form)} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Search...</InputLabel>
        <OutlinedInput
          id="filled-adornment-search"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Search visibility"
                onClick={() => setIsSearch(false)}
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
