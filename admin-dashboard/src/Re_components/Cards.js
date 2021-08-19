import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import TextTruncate from "react-text-truncate";

const useStyles = makeStyles({
  media: {
    height: 250,
    cursor: "pointer",
  },
});

const Cards = ({ items, isTruncate, nameLine = 1, descLine = 1 }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        className={clsx(classes.media)}
        image={items.image}
        title={items.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {isTruncate ? (
            <TextTruncate line={nameLine} truncateText="…" text={items.name} />
          ) : (
            items.name
          )}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {isTruncate ? (
            <TextTruncate
              line={descLine}
              truncateText="…"
              text={items.description}
            />
          ) : (
            items.description
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
