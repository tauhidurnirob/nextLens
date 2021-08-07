import React from "react";
import { Grid } from "@material-ui/core";
import Image from "next/image";

import { Carousel } from "../../src/Re_components";

const ProductImage = ({ data }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Grid item container md={5}>
      {data.detailsImage?.length === 0 ? (
        <Image src={data.image} alt={data.title} width={500} height={500} />
      ) : (
        <Carousel
          {...settings}
          slider={data.detailsImage?.map((item, index) => (
            <Image
              key={index}
              src={data.image}
              alt={data.title}
              width={500}
              height={500}
            />
          ))}
        />
      )}
    </Grid>
  );
};

export default ProductImage;
