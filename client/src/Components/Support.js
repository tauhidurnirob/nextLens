import React from "react";
import {
  makeStyles,
  Grid,
  Container,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import clsx from "clsx";

import { Text } from "../Re_components";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import HttpsOutlinedIcon from "@material-ui/icons/HttpsOutlined";

const useStyles = makeStyles((theme) => ({
  container: { padding: `${theme.spacing(4)}px 0 10px 0` },
  root: {
    maxWidth: 345,
  },
  cardHeader: {
    padding: `${theme.spacing(1.4)}px ${theme.spacing(2)}px`,
  },
  cardContent: {
    padding: `0px ${theme.spacing(2)}px`,
  },
  "@global": {
    ".MuiCardHeader-title": {
      fontSize: "16px",
      fontWeight: "500",
    },
  },
}));

const Support = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={clsx(classes.container)}>
      <Grid container direction="row" spacing={2}>
        {supports.map((item) => (
          <Grid key={item.id} item container md={3}>
            <Card className={clsx(classes.root)}>
              <CardHeader
                avatar={item.icon}
                title={item.title}
                className={clsx(classes.cardHeader)}
              />
              <CardContent className={clsx(classes.cardContent)}>
                <Text variant="body2" color="textSecondary" component="p">
                  {item.description}
                </Text>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Support;

const supports = [
  {
    id: 1,
    title: "FREE SHIPPING",
    description: "Free shipping on order or order above Tk.1000",
    icon: <DriveEtaOutlinedIcon style={{ fontSize: 55 }} />,
  },
  {
    id: 2,
    title: "SUPPORT 24/7",
    description: "Guaranteed quality products, Never compromise on quality",
    icon: <AcUnitOutlinedIcon style={{ fontSize: 55 }} />,
  },
  {
    id: 3,
    title: "14 DAYS RETURN",
    description: "Simply return it within 14 days for an exchange.",
    icon: <HistoryOutlinedIcon style={{ fontSize: 55 }} />,
  },
  {
    id: 4,
    title: "100% PAYMENT SECURE",
    description: "We ensure secure payment with PEV  an exchange.",
    icon: <HttpsOutlinedIcon style={{ fontSize: 55 }} />,
  },
];
