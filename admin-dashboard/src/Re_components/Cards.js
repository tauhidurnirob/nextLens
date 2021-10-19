import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "auto",
    cursor: "pointer",
    width: "100%",
  },
  // card: {
  //   [theme.breakpoints.down("sm")]: {
  //     width: "80%",
  //   },
  // },
}));

const Cards = ({ items }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.card)}>
      <CardMedia
        component="img"
        className={clsx(classes.media)}
        image={items.image}
        title={items.title}
        height="500"
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1">
          {items.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Box fontWeight="fontWeightBold">${items.price}</Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
