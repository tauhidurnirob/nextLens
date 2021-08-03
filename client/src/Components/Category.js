import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import { Cards } from "./../Re_components";
import categories from "../../fakeData/categories";

const useStyles = makeStyles((theme) => ({
  textColor: { color: "#fff", fontSize: 20 },
}));

const Category = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      {categories.map((item) => (
        <Grid key={item.id} container md={4} justifyContent="center">
          <Cards
            item={item}
            isCategory
            width={500}
            height={500}
            className={clsx(classes.textColor)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Category;
