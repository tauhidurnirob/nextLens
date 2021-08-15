import React, { useState } from "react";
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
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import CategoryIcon from "@material-ui/icons/Category";
import StoreIcon from "@material-ui/icons/Store";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PostAddIcon from "@material-ui/icons/PostAdd";
import SettingsIcon from "@material-ui/icons/Settings";

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
  },
  font: {
    fontSize: "18px",
    fontWeight: "500",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

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
                Dashboard
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="flex-end">
            <Grid item>
              <Typography variant="h6" noWrap>
                Dashboard
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" noWrap>
                Dashboard
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" noWrap>
                Dashboard
              </Typography>
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
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </Box>
        <Divider />
        <List>
          {dashboards.map((items, index) => (
            <>
              <ListItem
                button
                key={index}
                onClick={handleDrawerOpen}
                className={clsx(classes.listItem)}
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
            </>
          ))}
        </List>
      </Drawer>
      <main className={clsx(classes.content)}>
        <Box component="div" className={clsx(classes.toolbar)} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </Box>
  );
};

export default Dashboard;

const dashboards = [
  {
    name: "Dashbaord",
    icon: <ListAltIcon style={{ fontSize: "30px" }} />,
    route: "/",
  },
  {
    name: "Prodcuts",
    icon: <ShoppingBasketIcon style={{ fontSize: "30px" }} />,
    route: "/",
  },
  {
    name: "Category",
    icon: <CategoryIcon style={{ fontSize: "30px" }} />,
    route: "/",
  },
  {
    name: "Orders",
    icon: <StoreIcon style={{ fontSize: "30px" }} />,
    route: "/",
  },
  {
    name: "Customers",
    icon: <AssignmentIndIcon style={{ fontSize: "30px" }} />,
    route: "/",
  },
  {
    name: "Coupons",
    icon: <PostAddIcon style={{ fontSize: "30px" }} />,
    route: "/",
  },
  {
    name: "Settings",
    icon: <SettingsIcon style={{ fontSize: "30px" }} />,
    route: "/",
  },
];
