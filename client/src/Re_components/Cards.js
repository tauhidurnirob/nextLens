import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea, CardContent, Box } from "@material-ui/core";
import clsx from "clsx";
import Text from "./Text";
import Image from "next/image";
import colors from "../../config/colors";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "20px 20px",
    background: "transparent",
    transition: "transform .5s",
    "&:hover": {
      transform: "scale(1.1)",
    },
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
    backgroundColor: colors.black,
    borderRadius: "5px",
  },
});

const Cards = ({
  title,
  image = "/images/c1.png",
  height = 345,
  width = 345,
}) => {
  const classes = useStyles();

  return (
    <Box component="div" className={clsx(classes.root)}>
      <CardActionArea>
        <Image
          className={clsx(classes.media)}
          src={image}
          alt={title}
          height={height}
          width={width}
        />
        <CardContent className={clsx(classes.cardContent)}>
          <Text
            gutterBottom
            variant="h5"
            component="h2"
            style={{ color: "#fff" }}
          >
            {title}
          </Text>
        </CardContent>
      </CardActionArea>
    </Box>
  );
};

export default Cards;
