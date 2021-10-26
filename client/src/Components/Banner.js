import React, { Fragment } from "react";
import Image from "next/image";
import { Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { Carousel } from "../Re_components";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: "1440px",
    width: "100%",
    padding: "0 10px",
    margin: "20px auto 0 auto",
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
    <Grid container className={clsx(classes.container)}>
      <Carousel
        isBanner
        {...settings}
        slider={images.map((item, index) => (
          <Fragment key={index}>
            <Image
              src={item.image}
              alt={item.image}
              height={500}
              width={1000}
              alt="main-banner"
            />
          </Fragment>
        ))}
      />
    </Grid>
  );
};

export default Banner;

const images = [
  { image: "/images/navigation-banner/blue-light-glasses.png" },
  { image: "/images/navigation-banner/eyeglasses-banner.png" },
  { image: "/images/navigation-banner/sunglasses-banner.png" },
];
