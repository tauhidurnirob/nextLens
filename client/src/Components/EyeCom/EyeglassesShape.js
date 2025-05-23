import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

import { Carousel, Heading, Cards } from "../../Re_components";
import eyeShape from "../../../fakeData/eyeShape";

const useStyles = makeStyles(() => ({
  heading: { padding: "20px 0 5px 0", fontSize: 25, fontWeight: "bold" },
}));

const EconomyEyeGlasses = () => {
  const classes = useStyles();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,

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
      <Heading isDivider>
        <Typography className={clsx(classes.heading)}>
          {" "}
          EYEGLASSES SHAPE
        </Typography>
      </Heading>

      <Carousel
        {...settings}
        slider={eyeShape.map((item, index) => (
          <Cards key={index} isHover item={item} width={400} height={400} />
        ))}
      />
    </>
  );
};

export default EconomyEyeGlasses;
