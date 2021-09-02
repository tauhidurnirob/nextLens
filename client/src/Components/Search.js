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
import { useForm } from "react-hook-form";
import router, { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const useStyles = makeStyles(() => ({
  form: {
    width: "100%",
    margin: "10px 0",
  },
}));

const schema = yup.object().shape({
  search: yup.string(),
});

const Search = ({ setIsSearch }) => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = ({ keyword }) => {
    if (keyword)
      router.push({
        pathname: "search/[pid]",
        query: { pid: keyword },
      });
  };
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            inputProps={{ ...register("keyword") }}
          />
        </FormControl>
      </form>
    </Container>
  );
};

export default Search;
