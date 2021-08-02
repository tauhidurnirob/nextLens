import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import { Cards } from "./../Re_components";

const useStyles = makeStyles((theme) => ({
  textColor: { color: "#fff", fontSize: 20 },
}));

const Category = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      {categories.map((item, index) => (
        <Grid container md={4} justifyContent="center">
          <Cards
            key={index}
            title={item.title}
            image={item.image}
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

const categories = [
  { title: "MEN", image: "/images/men.png" },
  { title: "WOMEN", image: "/images/women.png" },
  { title: "KIDS", image: "/images/kids.png" },
];
