import React, { Fragment } from "react";
import Image from "next/image";
import img1 from "../assets/c1.png";
import img2 from "../assets/c2.png";
import img3 from "../assets/c3.png";
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
              <Image src={item.image} />
            </Fragment>
          ))}
        </Slider>
      }
    />
  );
};

export default Banner;

const images = [{ image: img1 }, { image: img2 }, { image: img3 }];
