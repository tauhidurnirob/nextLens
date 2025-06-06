import React from "react";
import {
  makeStyles,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Box,
  Grid,
} from "@material-ui/core";
import Link from "next/link";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  "@global": {
    ".MuiListItemIcon-root": {
      minWidth: "40px",
    },
  },
}));

const Shope = ({ title }) => {
  const classes = useStyles();

  return (
    <Grid item container md={3}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Box fontWeight="fontWeightBold">{title}</Box>
            <Divider />
          </ListSubheader>
        }
        className={clsx(classes.root)}
      >
        {frames.map((item) => (
          <Link href="/" key={item.id}>
            <ListItem button>
            <ListItemText primary={<Box fontWeight={600}>{item.name}</Box>} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Grid>
  );
};

export default Shope;

const frames = [
  { id: 1, name: "ECONOMY EYEGLASSES" },
  { id: 2, name: "PREMIUM EYEGLASSES" },
];
