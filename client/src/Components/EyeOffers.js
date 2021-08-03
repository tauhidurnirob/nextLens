import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { Heading, Cards, Carousel } from "../Re_components";
import eyeShape from "../../fakeData/eyeShape";

const useStyles = makeStyles(() => ({
  heading: { padding: "20px 0 5px 0", fontSize: 25, fontWeight: "bold" },
}));

const EyeOffers = () => {
  const classes = useStyles();

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
  };

  return (
    <>
      <Heading className={clsx(classes.heading)} isDivider>
        EYEGLASSES OFFERS
      </Heading>
      <Carousel
        {...settings}
        slider={eyeShape.map((item) => (
          <Cards item={item} width={300} height={300} />
        ))}
      />
    </>
  );
};

export default EyeOffers;
