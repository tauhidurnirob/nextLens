import React, { useState, useEffect } from "react";
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
import { useRouter } from "next/router";

const useStyles = makeStyles(() => ({
  form: {
    width: "100%",
    margin: "10px 0",
  },
}));

const Search = ({ setIsSearch }) => {
  const router = useRouter();

  const inputOnChange = (e) => {
    let val = e.target.value;
    if(val === '') {
      router.push("/");
      return;
    }
    router.push({
      pathname: "/search/[sid]",
      query: { sid: val.split(" ").join("+") },
    });
  }

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
          onChange={inputOnChange}
        />
      </FormControl>
    </Container>
  );
};

export default Search;
