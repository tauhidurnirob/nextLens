import React from "react";
import {
  makeStyles,
  Grid,
  Container,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@material-ui/core";
import clsx from "clsx";

import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import ClassOutlinedIcon from "@material-ui/icons/ClassOutlined";
import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";

const useStyles = makeStyles((theme) => ({
  container: { padding: `${theme.spacing(4)}px 0 10px 0` },
  root: {
    maxWidth: 345,
    padding: theme.spacing(1),
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

const DashboardCard = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={clsx(classes.container)}>
      <Box mb={4}>
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Full Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default DashboardCard;

const supports = [
  {
    id: 1,
    title: "Total Revenue",
    description: "Free shipping on order or order above Tk.1000",
    icon: <MonetizationOnOutlinedIcon style={{ fontSize: 45 }} />,
  },
  {
    id: 2,
    title: "Total Order",
    description: "Guaranteed quality products, Never compromise on quality",
    icon: <ClassOutlinedIcon style={{ fontSize: 45 }} />,
  },
  {
    id: 3,
    title: "New Customer",
    description: "Simply return it within 14 days for an exchange.",
    icon: <SupervisorAccountOutlinedIcon style={{ fontSize: 45 }} />,
  },
  {
    id: 4,
    title: "Total Delivery",
    description: "We ensure secure payment with PEV  an exchange.",
    icon: <DriveEtaOutlinedIcon style={{ fontSize: 45 }} />,
  },
];
