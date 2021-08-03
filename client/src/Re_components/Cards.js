import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardContent, Box, IconButton } from "@material-ui/core";
import clsx from "clsx";
import Image from "next/image";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import Link from "next/link";
import styles from "../../styles/imageHover.module.scss";
import Button from "./AppButton";

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
    top: "50%",
    left: "50%",
    backgroundColor: "rgb(255,255,255,0.7)",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
    padding: "5px",
  },
});

const Cards = ({
  item,
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
        className={clsx(styles.imgParent, {
          [styles.img]: isCategory,
        })}
      >
        <Image
          src={item.image}
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
        <Box
          component="div"
          className={clsx({
            [classes.productContent]: isProduct,
          })}
        >
          <Link href={`/product-details/${item.id}`}>
            <IconButton size="medium" color="secondary">
              <VisibilityOutlinedIcon style={{ fontSize: 30 }} />
            </IconButton>
          </Link>

          <IconButton size="medium" color="secondary">
            <ShoppingBasketOutlinedIcon style={{ fontSize: 30 }} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Cards;
