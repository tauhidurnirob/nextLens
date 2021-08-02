import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardActionArea,
  CardContent,
  Box,
  IconButton,
} from "@material-ui/core";
import clsx from "clsx";
import Text from "./Text";
import Image from "next/image";
import colors from "../../config/colors";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";

const useStyles = makeStyles({
  root: {
    margin: "20px 10px",
    position: "relative",
    overflow: "hidden",
  },
  box: {
    transition: "transform .5s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  media: {
    position: "relative",
    borderRadius: "5px",
  },
  categoryContent: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: "5px 15px",
    backgroundColor: colors.black,
    borderRadius: "5px",
  },
  productContent: {
    position: "absolute",
    left: 0,
    right: 0,
    margin: "0 auto",
    backgroundColor: colors.white,
  },
});

const Cards = ({
  title,
  image = "/images/c1.png",
  height = 345,
  width = 345,
  isCategory,
  isProduct,
  ...otherProps
}) => {
  const classes = useStyles();

  return (
    <Box component="div" className={clsx(classes.root)}>
      <Box component="div" className={clsx(classes.box)}>
        <CardActionArea>
          <Image src={image} alt={title} height={height} width={width} />
          {isCategory && (
            <CardContent
              className={clsx({
                [classes.categoryContent]: isCategory,
              })}
            >
              <Text {...otherProps} gutterBottom variant="h5" component="h2">
                {title}
              </Text>
            </CardContent>
          )}
          {isProduct && (
            <CardContent
              className={clsx({
                [classes.productContent]: isProduct,
              })}
            >
              <IconButton size="medium" color="secondary">
                <VisibilityOutlinedIcon style={{ fontSize: "25px" }} />
              </IconButton>
              <IconButton size="medium" color="secondary">
                <ShoppingBasketOutlinedIcon />
              </IconButton>
            </CardContent>
          )}
        </CardActionArea>
      </Box>
    </Box>
  );
};

export default Cards;
