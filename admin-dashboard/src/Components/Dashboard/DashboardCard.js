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
  },
  cardHeader: {
    padding: `${theme.spacing(1.4)}px ${theme.spacing(2)}px`,
  },
  cardContent: {
    padding: `0px ${theme.spacing(2)}px`,
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
  },
}));

const DashboardCard = () => {
  const classes = useStyles();

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

const dashboards = [
  {
    id: 1,
    title: "Total Revenue",
    details: "$711.66",
    description: " Revenue up ",
    icon: <MonetizationOnOutlinedIcon style={{ fontSize: 45 }} />,
    isIcon: true,
  },
  {
    id: 2,
    title: "Total Order",
    details: "88,568",
    description: " Order down",

    icon: <ClassOutlinedIcon style={{ fontSize: 45 }} />,
  },
  {
    id: 3,
    title: "New Customer",
    details: "5,678",
    description: " Customer up",

    icon: <SupervisorAccountOutlinedIcon style={{ fontSize: 45 }} />,
  },
  {
    id: 4,
    title: "Total Delivery",
    details: "78,000",
    description: " Delivery up ",
    icon: <DriveEtaOutlinedIcon style={{ fontSize: 45 }} />,
  },
];
