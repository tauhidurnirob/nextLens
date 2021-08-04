import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardContent, Box, IconButton, Grid } from "@material-ui/core";
import clsx from "clsx";
import Image from "next/image";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Link from "next/link";

import styles from "../../styles/imageHover.module.scss";
import Button from "./AppButton";
import Text from "./Text";
import colors from "../../config/colors";

const useStyles = makeStyles({
  root: {
    margin: "20px 10px",
    position: "relative",
    overflow: "hidden",
  },
  categoryContent: {
    position: "absolute",
    bottom: -20,
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "5px 15px",
    borderRadius: "5px",
  },
  productView: {
    position: "absolute",
    top: 5,
    left: 5,
    zIndex: 1,
  },
  productAddToCart: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },
  btn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "10px 20px",
    background: colors.white,
    maxWidth: "220px",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "60px",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.black,
      color: colors.white,
    },
    "&:focus": {
      background: colors.black,
      color: colors.white,
    },
  },
  font: {
    color: colors.black,
    cursor: "pointer",
    transition: "0.3s",
    fontWeight: "500",
    "&:hover": {
      color: colors.sky,
    },
  },
});

const Cards = ({
  item,
  isHover,
  height = 345,
  width = 345,
  isCategory,
  isProduct,
  ...otherProps
}) => {
  const classes = useStyles();

  const shouldBeCapital = (char) => {
    const character = char
      .split(" ")
      .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1));
    return character;
  };

  return (
    <Box component="div" className={clsx(classes.root)}>
      {isProduct ? (
        <Box component="div" className={clsx(styles.productArea)}>
          <Box component="div" className={clsx(styles.productOverlay)} />
          <Image
            blurDataURL
            src={item.image}
            // loader={() => "/images/imageLoader.svg"}
            alt={item.title}
            height={height}
            width={width}
          />

          <Box
            component="div"
            className={clsx({
              [classes.productView]: isProduct,
            })}
          >
            <Link href={`/product-details/${item.id}`}>
              <a>
                <IconButton size="medium" color="primary">
                  <VisibilityOutlinedIcon style={{ fontSize: 25 }} />
                </IconButton>
              </a>
            </Link>
          </Box>
          <Box
            component="div"
            className={clsx({
              [classes.productAddToCart]: isProduct,
            })}
          >
            <Link href={`/product-details/${item.id}`}>
              <a>
                <Button className={clsx(classes.btn)}>Add To Cart</Button>
              </a>
            </Link>
          </Box>
        </Box>
      ) : (
        <Box
          component="div"
          className={clsx({
            [styles.img]: isCategory,
            [styles.imgHover]: isHover,
          })}
        >
          <Image
            blurDataURL
            src={item.image}
            // loader={() => "/images/imageLoader.svg"}
            alt={item.title}
            height={height}
            width={width}
          />
        </Box>
      )}

      {isCategory && (
        <CardContent
          className={clsx({
            [classes.categoryContent]: isCategory,
          })}
        >
          <Button {...otherProps}>{item.title}</Button>
        </CardContent>
      )}
      {isProduct && (
        <>
          <Grid container direction="column">
            <Text className={clsx(classes.font)}>
              {shouldBeCapital(item.title).join(" ")}
            </Text>
            <Text>
              <Box fontWeight="fontWeightBold">${item.price}</Box>
            </Text>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Cards;
