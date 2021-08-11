import React from "react";
import { Grid } from "@material-ui/core";
import Image from "next/image";

import { Carousel } from "../../src/Re_components";
import { cartList } from "./../../src/redux/slices/productSlice";
import { useSelector } from "react-redux";

const ProductImage = () => {
  const { productById } = useSelector(cartList);

  const settings = {
    customPaging: function (i) {
      return (
        <img
          src={productById?.detailsImage[i].image}
          width="70px"
          height="70px"
        />
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
      {productById?.detailsImage.length === 0 ? (
        <Image
          src={productById?.image}
          alt={productById?.title}
          width={450}
          height={400}
        />
      ) : (
        <Carousel
          {...settings}
          slider={productById?.detailsImage.map((item, index) => (
            <Image
              key={index}
              src={item?.image}
              alt={productById?.title}
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
