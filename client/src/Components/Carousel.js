import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(8)}px 0`,
    overflow: "hidden",
    width: "100%",
  },
}));

const Carousel = ({ slider, isBanner }) => {
  const classes = useStyles();

  return isBanner ? (
    <Container maxWidth={false} className={clsx(classes.container)}>
      {slider}
    </Container>
  ) : null;
};

export default Carousel;
