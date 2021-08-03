import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(8)}px 0 10px 0`,
    overflow: "hidden",
    width: "100%",
  },
}));

const Carousel = ({ slider, isBanner, ...otherProps }) => {
  const classes = useStyles();

  return isBanner ? (
    <Container maxWidth={false} className={clsx(classes.container)}>
      <Slider {...otherProps}>{slider}</Slider>
    </Container>
  ) : null;
};

export default Carousel;
