import React from "react";
import {
  makeStyles,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Box,
  Grid,
} from "@material-ui/core";
import Link from "next/link";
import clsx from "clsx";
import EmojiPeopleOutlinedIcon from "@material-ui/icons/EmojiPeopleOutlined";
import PregnantWomanOutlinedIcon from "@material-ui/icons/PregnantWomanOutlined";
import ChildCareOutlinedIcon from "@material-ui/icons/ChildCareOutlined";

import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

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

const ListItems = () => {
  const classes = useStyles();

  return (
    <Grid item container md={3}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Box fontWeight="fontWeightBold">Gender</Box>
            <Divider />
          </ListSubheader>
        }
        className={clsx(classes.root)}
      >
        {genders.map((item) => (
          <Link href="/" key={item.id}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Grid>
  );
};

export default ListItems;

const genders = [
  { id: 1, name: "Man", icon: <EmojiPeopleOutlinedIcon /> },
  { id: 2, name: "Woman", icon: <PregnantWomanOutlinedIcon /> },
  { id: 3, name: "Kids", icon: <ChildCareOutlinedIcon /> },
];
