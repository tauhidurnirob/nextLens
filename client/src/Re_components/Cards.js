import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea, CardContent, Box } from "@material-ui/core";
import clsx from "clsx";
import Text from "./Text";
import Image from "next/image";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "20px 20px",
    background: "transparent",
  },
  media: {
    position: "relative",
    borderRadius: "5px",
  },
  cardContent: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: "5px 15px",
    backgroundColor: "red",
  },
});

const Cards = ({ title, image, height = 345, width = 345 }) => {
  const classes = useStyles();

  return (
    <Box component="div" className={clsx(classes.root)}>
      <CardActionArea>
        <Image
          className={clsx(classes.media)}
          src="/images/c1.png"
          alt="images"
          height={height}
          width={width}
        />
        <CardContent className={clsx(classes.cardContent)}>
          <Text gutterBottom variant="h5" component="h2">
            {title}
          </Text>
        </CardContent>
      </CardActionArea>
    </Box>
  );
};

export default Cards;
