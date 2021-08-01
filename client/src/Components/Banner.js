import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import Slider from "react-slick";
import Image from "next/image";
import img1 from "../assets/c1.png";
import img2 from "../assets/c2.png";
import img3 from "../assets/c3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(8)}px 0`,
    overflow: "hidden",
    width: "100%",
  },
}));

const Banner = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container maxWidth={false} className={clsx(classes.container)}>
      <Slider {...settings}>
        <Image src={img1} />
        <Image src={img2} />
        <Image src={img3} />
      </Slider>
    </Container>
  );
};

export default Banner;
