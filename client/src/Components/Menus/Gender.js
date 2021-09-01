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

const Gender = ({ title }) => {
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
        {genders.map((item) => (
          <Link href={item.route} key={item.id}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={<Box fontWeight={600}>{item.name}</Box>} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Grid>
  );
};

export default Gender;

const genders = [
  {
    id: 1,
    name: "MEN",
    icon: <EmojiPeopleOutlinedIcon />,
    route: "/eyeglasses/category/men",
  },
  {
    id: 2,
    name: "WOMEN",
    icon: <PregnantWomanOutlinedIcon />,
    route: "/eyeglasses/category/women",
  },
  {
    id: 3,
    name: "KIDS",
    icon: <ChildCareOutlinedIcon />,
    route: "/eyeglasses/category/kid",
  },
];
