import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Grid,
  TextField,
  FormControl,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import clsx from "clsx";

import { Button } from "../Re_components";
import colors from "../../config/colors";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
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
});

const RatingComponent = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const classes = useStyles();

  return (
    <Grid item container md={7}>
      <Box component="div" className={clsx(classes.root)}>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {value !== null && (
          <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
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
            rows={4}
            rowsMax={8}
          />
        </FormControl>
        <Button className={clsx(classes.btn)}>Submit</Button>
      </Grid>
    </Grid>
  );
};

export default RatingComponent;
