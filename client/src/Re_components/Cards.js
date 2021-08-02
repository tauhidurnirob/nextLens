import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardActionArea, CardContent, CardMedia } from "@material-ui/core";
import clsx from "clsx";
import Text from "./Text";
import Image from "next/image";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Cards = ({ col }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root)}>
      <CardActionArea>
        <Image
          className={clsx(classes.media)}
          src="/images/c1.png"
          alt="images"
        />
        <CardContent>
          <Text gutterBottom variant="h5" component="h2">
            Lizard
          </Text>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
