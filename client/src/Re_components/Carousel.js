import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "../../styles/image.module.scss";

const useStyles = makeStyles((theme) => ({
  isBannerContainer: {
    padding: `${theme.spacing(8)}px 0 10px 0`,
    overflow: "hidden",
    width: "100%",
    cursor: "pointer",
  },
  container: {
    padding: `${theme.spacing(2)}px 0 10px 0`,
    overflow: "hidden",
    cursor: "pointer",
  },
}));

const Carousel = ({ slider, isBanner, ...otherProps }) => {
  const classes = useStyles();

  return (
    <Container
      maxWidth={false}
      className={clsx({
        [classes.isBannerContainer]: isBanner,
        [classes.container]: !isBanner,
      })}
    >
      <Slider
        {...otherProps}
        className={clsx({
          [styles.banner]: isBanner,
        })}
      >
        {slider}
      </Slider>
    </Container>
  );
};

export default Carousel;
