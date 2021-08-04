import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import { Cards } from "./../Re_components";
import categories from "../../fakeData/categories";
import colors from "../../config/colors";

const useStyles = makeStyles(() => ({
  btn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "10px 20px",
    background: colors.white,
    minWidth: "220px",
    letterSpacing: "2px",
    borderRadius: 0,
    borderColor: "2px solid #222",
    fontSize: "14px",
    fontWeight: "bold",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.sky,
      color: colors.white,
    },
    "&:focus": {
      background: colors.sky,
      color: colors.white,
    },
  },
}));

const Category = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      {categories.map((item) => (
        <Grid item key={item.id} container md={4} justifyContent="center">
          <Cards
            item={item}
            isCategory
            isHover
            width={500}
            height={500}
            className={clsx(classes.btn)}
            variant="contained"
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Category;
