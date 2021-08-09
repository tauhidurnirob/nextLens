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
import { ShouldBeCapital } from "../../utils/utils";
import AddToCartButton from "./AddToCartButton";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px 10px",
    position: "relative",
    overflow: "hidden",
  },
  productAddToCart: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
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
  font: {
    color: colors.black,
    cursor: "pointer",
    transition: "0.3s",
    fontWeight: "500",
    letterSpacing: "1px",
    fontSize: "16px",
    padding: "4px 0",
    "&:hover": {
      color: colors.sky,
    },
  },
}));

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
  return (
    <Box component="div" className={clsx(classes.root)}>
      {isProduct ? (
        <Box component="div" className={clsx(styles.productArea)}>
          <Box component="div" className={clsx(styles.productOverlay)} />
          <Image
            blurDataURL
            src={item?.image}
            // loader={() => "/images/imageLoader.svg"}
            alt={item?.title}
            height={height}
            width={width}
          />

          <Box
            component="div"
            className={clsx({
              [classes.productView]: isProduct,
            })}
          >
            <Link href={`/product-details/${item?.id}`}>
              <a>
                <IconButton size="medium" style={{ color: colors.white }}>
                  <VisibilityOutlinedIcon
                    style={{ fontSize: 25, color: colors.white }}
                  />
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
              <AddToCartButton item={item} />
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
            src={item?.image}
            // loader={() => "/images/imageLoader.svg"}
            alt={item?.title}
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
          <Button {...otherProps}>{item?.title}</Button>
        </CardContent>
      )}
      {isProduct && (
        <>
          <Grid container direction="column">
            <Text className={clsx(classes.font)}>
              {ShouldBeCapital(item?.title)}
            </Text>
            <Text>
              <Box fontWeight={500}>৳{item?.price}</Box>
            </Text>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Cards;
