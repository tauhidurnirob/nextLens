import React, { Fragment } from "react";
import Image from "next/image";
import { Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";

import { Carousel } from "../Re_components";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1440px",
    width: "100%",
    padding: "0 10px",
    margin: "20px auto 0 auto",
  },

  virtual: {
    padding: `${theme.spacing(8)}px 0 10px 0`,
    height: "474px",
    cursor: "pointer",
  },
}));

const Banner = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 992px)",
  });
  const classes = useStyles();

  const settings = {
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Grid container direction="row" className={clsx(classes.container)}>
      {isDesktopOrLaptop && (
        <Grid item container md={4} lg={4} className={clsx(classes.virtual)}>
          <Image src="/images/virtual.png" height={400} width={400} />
        </Grid>
      )}
      <Grid item container md={8} lg={8}>
        <Carousel
          isBanner
          {...settings}
          slider={images.map((item, index) => (
            <Fragment key={index}>
              <Image
                src={item.image}
                alt={item.image}
                height={400}
                width={400}
              />
            </Fragment>
          ))}
        />
      </Grid>
    </Grid>
  );
};

export default Banner;

const images = [
  { image: "/images/c1.png" },
  { image: "/images/c2.png" },
  { image: "/images/c3.png" },
];
