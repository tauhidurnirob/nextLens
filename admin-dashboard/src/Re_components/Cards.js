import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  media: {
    height: 250,
    cursor: "pointer",
  },
});

const Cards = ({ items }) => {
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
          {items.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {items.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
