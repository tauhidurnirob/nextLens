import React, { useState, useEffect, Fragment } from "react";
import clsx from "clsx";
import {
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Box,
  Grid,
  Avatar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import StoreIcon from "@material-ui/icons/Store";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { NavLink, useLocation } from "react-router-dom";

import colors from "../config/colors";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: "#273c75",
    overflow: "hidden",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
    background: "#273c75",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItem: {
    padding: `${theme.spacing(2)}px `,
  },
  divider: {
    height: "1px",
    background: colors.white,
  },
  font: {
    fontSize: "18px",
    fontWeight: "500",
    color: colors.white,
  },
}));

const Layout = ({ title, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    handleDrawerOpen();
  }, [location.pathname]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box component="div" className={clsx(classes.root)}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Grid container direction="row" justifyContent="flex-start">
            <Grid item>
              <Typography variant="h6" noWrap>
                {title}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item>
              <Box mr={2}>
                <IconButton>
                  <PowerSettingsNewIcon
                    style={{ fontSize: "25px", color: colors.white }}
                  />
                </IconButton>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Avatar
                  alt="Muktadir"
                  src="https://avatars.githubusercontent.com/u/55608139?v=4"
                />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Box component="div" className={clsx(classes.toolbar)}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon style={{ color: colors.white }} />
            ) : (
              <ChevronLeftIcon style={{ color: colors.white }} />
            )}
          </IconButton>
        </Box>
        <Divider />
        <List>
          {dashboards.map((items, index) => (
            <Fragment key={index}>
              <ListItem
                button
                className={clsx(classes.listItem)}
                component={NavLink}
                to={items.route}
              >
                <ListItemIcon>{items.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography className={clsx(classes.font)}>
                      {items.name}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider className={clsx(classes.divider)} />
            </Fragment>
          ))}
        </List>
      </Drawer>
      <main className={clsx(classes.content)}>
        <Box component="div" className={clsx(classes.toolbar)} />
        {children}
      </main>
    </Box>
  );
};

export default Layout;

const dashboards = [
  {
    name: "Dashbaord",
    icon: <ListAltIcon style={{ fontSize: "30px", color: colors.white }} />,
    route: "/",
  },
  {
    name: "Products",
    icon: (
      <ShoppingBasketIcon style={{ fontSize: "30px", color: colors.white }} />
    ),
    route: "/product",
  },

  {
    name: "Orders",
    icon: <StoreIcon style={{ fontSize: "30px", color: colors.white }} />,
    route: "/orders",
  },
  {
    name: "Customers",
    icon: (
      <AssignmentIndIcon style={{ fontSize: "30px", color: colors.white }} />
    ),
    route: "/customers",
  },
];
