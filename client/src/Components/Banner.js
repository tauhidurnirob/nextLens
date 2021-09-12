import React, { Fragment } from "react";
import Image from "next/image";
import { Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { Carousel } from "../Re_components";
import { productSelector } from "./../redux/slices/productSlice";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1440px",
    width: "100%",
    padding: "0 10px",
    margin: "20px auto 0 auto",
  },

  virtual: {
    padding: `${theme.spacing(8)}px 0 10px 0`,
    height: "474px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Banner = () => {
  const classes = useStyles();

  const settings = {
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Grid container direction="row" className={clsx(classes.container)}>
      <Grid item container md={4} lg={4} className={clsx(classes.virtual)}>
        <Image src="/images/virtual.png" height={400} width={400} />
      </Grid>
      <Grid item container md={8} lg={8}>
        <Carousel
          isBanner
          {...settings}
          slider={images.map((item, index) => (
            <Fragment key={index}>
              <Image
                src={item.image}
                alt={item.image}
                height={400}
                width={400}
                alt="main-banner"
              />
            </Fragment>
          ))}
        />
      </Grid>
    </Grid>
  );
};

export default Banner;

const images = [
  { image: "/images/navigation-banner/blue-light-glasses.png" },
  { image: "/images/navigation-banner/eyeglasses-banner.png" },
  { image: "/images/navigation-banner/sunglasses-banner.png" },
];
