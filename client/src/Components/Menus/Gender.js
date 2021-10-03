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
import { useRouter } from "next/router";
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

  const router = useRouter();
  const isRoute = router.asPath.split("/")[1];

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
        {isRoute === "eyeglasses"
          ? genders.map((item) => (
              <Link href={item.eyeglasses} key={item.id}>
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={<Box fontWeight={600}>{item.name}</Box>}
                  />
                </ListItem>
              </Link>
            ))
          : genders.map((item) => (
              <Link href={item.sunglasses} key={item.id}>
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={<Box fontWeight={600}>{item.name}</Box>}
                  />
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
    eyeglasses: "/eyeglasses/category/men",
    sunglasses: "/sunglasses/category/men",
  },
  {
    id: 2,
    name: "WOMEN",
    icon: <PregnantWomanOutlinedIcon />,
    eyeglasses: "/eyeglasses/category/women",
    sunglasses: "/sunglasses/category/women",
  },
  {
    id: 3,
    name: "KIDS",
    icon: <ChildCareOutlinedIcon />,
    eyeglasses: "/eyeglasses/category/kid",
    sunglasses: "/sunglasses/category/kid",
  },
];
