import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea, CardContent, Box } from "@material-ui/core";
import clsx from "clsx";
import Text from "./Text";
import Image from "next/image";
import colors from "../../config/colors";

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
  isCategory,
  ...otherProps
}) => {
  const classes = useStyles();

  return (
    <Box component="div" className={clsx(classes.root)}>
      <Box component="div" className={clsx(classes.box)}>
        <CardActionArea>
          <Image src={image} alt={title} height={height} width={width} />
          <CardContent className={clsx({ [classes.cardContent]: isCategory })}>
            {isCategory && (
              <Text {...otherProps} gutterBottom variant="h5" component="h2">
                {title}
              </Text>
            )}
          </CardContent>
        </CardActionArea>
      </Box>
    </Box>
  );
};

export default Cards;
