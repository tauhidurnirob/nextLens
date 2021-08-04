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
  productContent: {
    position: "absolute",
    top: 5,
    left: 5,
    zIndex: 1,
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

  return (
    <Box component="div" className={clsx(classes.root)}>
      <Box
        component="div"
        className={clsx({
          [styles.img]: isCategory,
          [styles.imgHover]: isCategory,
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
          <Box component="div" className={clsx(styles.productArea)}>
            <Box component="div" className={clsx(styles.productOverlay)} />
            <Image src="/images/kids.png" height={500} width={500} />

            <Box
              component="div"
              className={clsx({
                [classes.productContent]: isProduct,
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
          </Box>
          <Grid container direction="column">
            <Text style={{ fontWeight: "bold" }} color="secondary">
              shakib
            </Text>
            <Text>$100</Text>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Cards;
