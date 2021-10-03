import React from "react";
import {
  makeStyles,
  FormControl,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  Button,
} from "@material-ui/core";
import clsx from "clsx";

import colors from "../../../config/colors";

const useStyles = makeStyles(() => ({
  textField: { width: "94%" },
  btn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "10px 20px",
    background: colors.black,
    minWidth: "150px",
    letterSpacing: "2px",
    borderColor: "2px solid #222",
    fontSize: "14px",
    fontWeight: "bold",
    color: colors.white,
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.sky,
      color: colors.white,
    },
  },
}));

const NewsletterForm = () => {
  const classes = useStyles();
  return (
    <FormControl className={clsx(classes.textField)} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">
        Email Address
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type="text"
        endAdornment={
          <InputAdornment position="end">
            <Button variant="contained" className={clsx(classes.btn)}>
              Subscribe
            </Button>
          </InputAdornment>
        }
        labelWidth={100}
      />
    </FormControl>
  );
};

export default NewsletterForm;
