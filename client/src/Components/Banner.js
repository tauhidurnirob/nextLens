import React from "react";
import { makeStyles, Box, Grid, Typography, Button } from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-scroll";

import styles from "../../styles/categoryBanner.module.scss";
import colors from "../../config/colors";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#fff",
    fontSize: "40px",
    fontWeight: "700",
    letterSpacing: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  btn: {
    transition: "all 300ms ease-in-out",
    boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
    padding: "10px 20px",
    background: colors.white,
    minWidth: "220px",
    letterSpacing: "2px",
    borderRadius: 0,
    borderColor: "2px solid #222",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "25px",
    marginTop: "30px",
    "&:hover": {
      boxShadow: "1px 1px 0 0 rgb(0 0 0 / 10%)",
      background: colors.sky,
      color: colors.white,
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "150px",
    },
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={clsx(styles.mainBanner__bg)}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Typography align="center" variant="h2" className={clsx(classes.title)}>
        <Box fontWeight="fontWeightBold">A BROAD RANGE OF TRENDY EYEWEAR</Box>
        <Link to="productSection" smooth={true} duration={1000}>
          <Button variant="outlined" className={clsx(classes.btn)}>
            Shop Now
          </Button>
        </Link>
      </Typography>
    </Grid>
  );
};

export default Banner;
