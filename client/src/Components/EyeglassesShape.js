import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import Image from "next/image";

import { Carousel, Heading } from "../Re_components";
import eyeShape from "../../fakeData/eyeShape";

const useStyles = makeStyles(() => ({
  heading: { padding: "20px", fontSize: 25, fontWeight: "bold" },
}));

const EconomyEyeGlasses = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Heading className={clsx(classes.heading)} isDivider>
        EYEGLASSES SHAPE
      </Heading>
      <Carousel
        {...settings}
        slider={eyeShape.map((item) => (
          <Grid item container md={4} lg={4} key={item.id}>
            <Image src={item.image} alt={item.image} height={500} width={500} />
          </Grid>
        ))}
      />
    </>
  );
};

export default EconomyEyeGlasses;
