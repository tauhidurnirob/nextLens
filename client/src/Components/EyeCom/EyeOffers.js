import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { Heading, Cards, Carousel } from "../../Re_components";
import eyeOffer from "../../../fakeData/eyeOffer";

const useStyles = makeStyles(() => ({
  heading: { padding: "20px 0 5px 0", fontSize: 25, fontWeight: "bold" },
}));

const EyeOffers = () => {
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
        EYEGLASSES OFFERS
      </Heading>
      <Carousel
        {...settings}
        slider={eyeOffer
          .map((item) => (
            <Cards isHover key={item.id} item={item} width={300} height={200} />
          ))
          .slice(0, 4)}
      />
    </>
  );
};

export default EyeOffers;
