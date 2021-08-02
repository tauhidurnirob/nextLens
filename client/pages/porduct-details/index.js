import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import { Cards } from "./../Re_components";

const useStyles = makeStyles((theme) => ({
  textColor: { color: "#fff", fontSize: 20 },
}));

const ProductDetails = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      {categories.map((item, index) => (
        <Grid container md={4} justifyContent="center">
          <Cards
            key={index}
            title={item.title}
            image={item.image}
            isProduct
            width={500}
            height={500}
            className={clsx(classes.textColor)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductDetails;

const categories = [
  { image: "/images/sun1.png" },
  { image: "/images/sun2.png" },
  { image: "/images/sun3.png" },
  { image: "/images/sun1.png" },
  { image: "/images/sun2.png" },
  { image: "/images/sun3.png" },
];
