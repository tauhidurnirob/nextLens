import React from "react";
import Image from "next/image";
import img1 from "../assets/c1.png";
import img2 from "../assets/c2.png";
import img3 from "../assets/c3.png";
import Carousel from "./Carousel";
import Slider from "react-slick";


const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Carousel
      isBanner
      slider={
        <Slider {...settings}>
          <Image src={img1} />
          <Image src={img2} />
          <Image src={img3} />
        </Slider>
      }
    />
  );
};

export default Banner;
