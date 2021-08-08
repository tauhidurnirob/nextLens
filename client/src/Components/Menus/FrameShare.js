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

const FrameShare = ({ title }) => {
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
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Grid>
  );
};

export default FrameShare;

const frames = [
  { id: 1, name: "ROUND" },
  { id: 2, name: "RETROSQUARE" },
  { id: 3, name: "CLUBMASTER" },
  { id: 4, name: "OVAL" },
  { id: 5, name: "RECTANGLE" },
  { id: 6, name: "PILOT" },
];
