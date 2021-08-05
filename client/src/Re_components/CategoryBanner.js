import { makeStyles, Box, Grid } from "@material-ui/core";
import clsx from "clsx";
import { Parallax } from "react-scroll-parallax";

import Text from "./Text";
import styles from "../../styles/categoryBanner.module.scss";

const useStyles = makeStyles(() => ({
  title: {
    color: "#fff",
    fontSize: "40px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "5px",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={clsx(styles.banner__bg)}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Parallax x={[-40, 20]} tagOuter="figure">
        <Text align="center" variant="h2" className={clsx(classes.title)}>
          <Box fontWeight="fontWeightBold">Relax Your Mind</Box>
        </Text>
      </Parallax>
    </Grid>
  );
};

export default Banner;
