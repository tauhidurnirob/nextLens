import React, { Fragment } from "react";
import Image from "next/image";

import { Carousel } from "../Re_components";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel
      isBanner
      slider={
        <Slider {...settings}>
          {images.map((item, index) => (
            <Fragment key={index}>
              <Image
                src={item.image}
                alt={item.image}
                height={400}
                width={400}
              />
            </Fragment>
          ))}
        </Slider>
      }
    />
  );
};

export default Banner;

const images = [
  { image: "/images/c1.png" },
  { image: "/images/c2.png" },
  { image: "/images/c3.png" },
];
