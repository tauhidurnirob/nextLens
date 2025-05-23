import React from "react";
import {
  makeStyles,
  Grid,
  Container,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import clsx from "clsx";

import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import ClassOutlinedIcon from "@material-ui/icons/ClassOutlined";
import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import { isText } from "./../../utils/utils";

const useStyles = makeStyles((theme) => ({
  container: { padding: `${theme.spacing(4)}px 0 10px 0` },
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },
  },
  cardHeader: {
    padding: `${theme.spacing(1.4)}px ${theme.spacing(2)}px`,
    [theme.breakpoints.down("sm")]: {
      padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
    },
  },
  cardContent: {
    padding: `0px ${theme.spacing(2)}px`,
    [theme.breakpoints.down("sm")]: {
      padding: `0px ${theme.spacing(1)}px`,
    },
  },
  isUp: {
    color: "green",
  },
  isDown: {
    color: "red",
  },
  "@global": {
    ".MuiCardHeader-title": {
      fontSize: "16px",
      fontWeight: "500",
    },
    ".MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-grid-md-3 ": {
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const DashboardCard = ({ revenue, orders, users }) => {
  const classes = useStyles();

  const dashboards = [
    {
      id: 1,
      title: "Total Revenue",
      details: `$${revenue}`,
      description: " Revenue up ",
      icon: <MonetizationOnOutlinedIcon style={{ fontSize: 45 }} />,
      isIcon: true,
    },
    {
      id: 2,
      title: "Total Order",
      details: orders.length,
      description: " Order down",

      icon: <ClassOutlinedIcon style={{ fontSize: 45 }} />,
    },
    {
      id: 3,
      title: "New Customer",
      details: users.length,
      description: " Customer up",

      icon: <SupervisorAccountOutlinedIcon style={{ fontSize: 45 }} />,
    },
    {
      id: 4,
      title: "Total Delivery",
      details: "780",
      description: " Delivery up ",
      icon: <DriveEtaOutlinedIcon style={{ fontSize: 45 }} />,
    },
  ];

  return (
    <Container maxWidth={false} className={clsx(classes.container)}>
      <Box mb={4}>
        <Grid container direction="row" spacing={2} justifyContent="center">
          {dashboards.map((item) => (
            <Grid key={item.id} item container md={3}>
              <Card className={clsx(classes.root)}>
                <CardHeader
                  avatar={item.icon}
                  title={item.title}
                  className={clsx(classes.cardHeader)}
                />
                <CardContent className={clsx(classes.cardContent)}>
                  <Box mb={2}>
                    <Typography variant="h5" color="textSecondary">
                      {item.details}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    className={clsx({
                      [classes.isUp]: isText(item.description) === "up",
                      [classes.isDown]: isText(item.description) === "down",
                    })}
                  >
                    {item.description} (previous 30 days)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default DashboardCard;
