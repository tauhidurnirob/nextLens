import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {
  Box,
  ButtonGroup,
  Container,
  Grid,
  Badge,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { cartList } from "../../redux/slices/productSlice";

import MobileNavigation from "./MobileNavigation";

import Search from "../Search";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    maxWidth: "1440px",
    width: "100%",
    padding: "0 10px",
    margin: "0 auto",
  },

  linkButton: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  linkButtonHover: {
    transition: "all .5s",
    "&:hover": {
      background: "transparent",
      color: "#91DAFE !important",
    },
  },
  appBar: {
    background: "transparent !important",
    boxShadow: "none",
  },
  container: {
    background: "white !important",
    padding: "5px 0px",
  },
  icon: {
    display: "flex",
    cursor: "pointer",
  },
}));

const Navigation = () => {
  const [isSearch, setIsSearch] = useState(false);
  const { cart } = useSelector(cartList);
  const totalQuantity = cart
    .map((item) => item.quantity)
    .reduce((total, qty) => total + qty, 0);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 992px)",
  });

  const classes = useStyles();

  const icons = (
    <>
      <Box mr={2} onClick={() => setIsSearch(true)}>
        <SearchIcon style={{ color: "black" }} />
      </Box>

      <Link href="/login">
        <Box mr={2}>
          <AccountCircleOutlinedIcon style={{ color: "black" }} />
        </Box>
      </Link>

      <Link href="/cart">
        <Box mr={2}>
          <Badge badgeContent={totalQuantity || "0"} color="primary">
            <ShoppingCartOutlinedIcon style={{ color: "black" }} />
          </Badge>
        </Box>
      </Link>
    </>
  );

  return (
    <Box component="div">
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <Container maxWidth={false} className={clsx(classes.container)}>
          {isSearch ? (
            <Search setIsSearch={setIsSearch} />
          ) : (
            <Toolbar className={clsx(classes.toolbar)}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                {isDesktopOrLaptop && <MobileNavigation />}
                {!isDesktopOrLaptop && (
                  <Grid item>
                    <Link href="/">
                      <Typography
                        variant="h5"
                        style={{ color: "black", cursor: "pointer" }}
                      >
                        NextLens
                      </Typography>
                    </Link>
                  </Grid>
                )}

                <Grid item>
                  <ButtonGroup
                    color="inherit"
                    className={clsx(classes.linkButton)}
                  >
                    {router.map((item, index) => (
                      <Box mr={2} key={index}>
                        <Link href={item.route}>
                          <Button className={clsx(classes.linkButtonHover)}>
                            {item.routeName.toUpperCase()}
                          </Button>
                        </Link>
                      </Box>
                    ))}
                  </ButtonGroup>
                </Grid>
                <Grid item className={clsx(classes.icon)}>
                  {icons}
                </Grid>
              </Grid>
            </Toolbar>
          )}
        </Container>
      </AppBar>
    </Box>
  );
};

const router = [
  { routeName: "Home", route: "/home" },
  { routeName: "Eyeglasses", route: "/eyegalsses" },
  { routeName: "sunglasses", route: "/home" },
  { routeName: "blue light block glass", route: "/home" },
  { routeName: "Blog", route: "/home" },
  { routeName: "Contact", route: "/home" },
];

export default Navigation;
