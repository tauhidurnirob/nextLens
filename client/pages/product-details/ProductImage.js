import React from "react";
import { Grid } from "@material-ui/core";
import Image from "next/image";

import { Carousel } from "../../src/Re_components";

const ProductImage = ({ data }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <img src={data?.detailsImage[i].image} width="70px" height="70px" />
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Grid item container md={5} justifyContent="center">
      {data?.detailsImage.length === 0 ? (
        <Image src={data?.image} alt={data?.title} width={450} height={400} />
      ) : (
        <Carousel
          {...settings}
          slider={data?.detailsImage.map((item, index) => (
            <Image
              key={index}
              src={item?.image}
              alt={data?.title}
              width={450}
              height={400}
            />
          ))}
        />
      )}
    </Grid>
  );
};

export default ProductImage;
