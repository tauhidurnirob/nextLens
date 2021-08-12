import React from "react";
import { makeStyles, Grid, Box, Typography } from "@material-ui/core";
import clsx from "clsx";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

import colors from "../../../config/colors";

const useStyles = makeStyles((theme) => ({
  text: { display: "flex", fontWeight: "500", fontSize: "16px" },
  box: { display: "flex", fontWeight: "bold" },
  icon: {
    transition: ".5s",
    cursor: "pointer",
    "&:hover": {
      color: colors.sky,
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid item container md={6}>
      <Grid container direction="column">
        <Typography gutterBottom variant="h6">
          <Box fontWeight="fontWeightBold">Contacts</Box>
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          className={clsx(classes.text)}
        >
          <Box mr={1}>
            <RoomOutlinedIcon />
          </Box>
          44/8,1st Floor, West Panthopath,North Dhanmondhi,Dhaka-1205
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          className={clsx(classes.text)}
        >
          <Box mr={1}>
            <MailOutlineOutlinedIcon />
          </Box>
          info@dukpion.com
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          className={clsx(classes.text)}
        >
          <Box mr={1}>
            <CallOutlinedIcon />
          </Box>
          +88 01872777452
        </Typography>
        <Box component="div" className={clsx(classes.box)}>
          <Box mr={4}>
            <FacebookIcon
              className={clsx(classes.icon)}
              style={{ fontSize: 30 }}
            />
          </Box>
          <Box mr={4}>
            <InstagramIcon
              className={clsx(classes.icon)}
              style={{ fontSize: 30 }}
            />
          </Box>
          <Box mr={4}>
            <YouTubeIcon
              className={clsx(classes.icon)}
              style={{ fontSize: 30 }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contact;
