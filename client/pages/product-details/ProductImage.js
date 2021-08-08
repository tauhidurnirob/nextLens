import React from "react";
import { Grid } from "@material-ui/core";
import Image from "next/image";

import { Carousel, Cards } from "../../src/Re_components";

const ProductImage = ({ data }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Grid item container md={5} justifyContent="flex-end">
      {data?.detailsImage.length === 0 ? (
        <Image src={data?.image} alt={data?.title} width={450} height={450} />
      ) : (
        <Carousel
          {...settings}
          slider={data?.detailsImage.map((item, index) => (
            <Grid key={index} item container>
              <Image
                src={item?.image}
                alt={data?.title}
                width={450}
                height={450}
              />
            </Grid>
          ))}
        />
      )}
    </Grid>
  );
};

export default ProductImage;
