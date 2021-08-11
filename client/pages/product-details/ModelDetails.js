import React from "react";
import { Container, makeStyles, Grid, Box } from "@material-ui/core";
import clsx from "clsx";

import { Text, Heading } from "./../../src/Re_components";
import colors from "../../config/colors";
import RatingComponent from "../../src/Components/RatingComponent";
import { cartList } from "./../../src/redux/slices/productSlice";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: { margin: `${theme.spacing(3)}px auto` },
  box: { color: colors.font },
  heading: { padding: "20px 0 5px 0", fontSize: 25, fontWeight: "bold" },
}));

const ModelDetails = () => {
  const classes = useStyles();

  const { productById } = useSelector(cartList);

  return (
    <>
      <Heading className={clsx(classes.heading)} isDivider>
        Model Details
      </Heading>
      <Container maxWidth="lg" className={clsx(classes.container)}>
        <Grid container direction="row" spacing={2}>
          <Grid item md={5}>
            <Text gutterBottom variant="subtitle1">
              <Box component="span" fontWeight="fontWeightBold">
                Model Number:
              </Box>
              <Box component="span" ml={1} className={clsx(classes.box)}>
                {productById?.details.modelNumber}
              </Box>
            </Text>
            <Text gutterBottom variant="subtitle1">
              <Box component="span" fontWeight="fontWeightBold">
                Size:
              </Box>
              <Box component="span" ml={1} className={clsx(classes.box)}>
                {productById?.details.size}
              </Box>
            </Text>
            <Text gutterBottom variant="subtitle1">
              <Box component="span" fontWeight="fontWeightBold">
                Frame Material:
              </Box>
              <Box component="span" ml={1} className={clsx(classes.box)}>
                {productById?.details.frameMaterial}
              </Box>
            </Text>
            <Text gutterBottom variant="subtitle1">
              <Box component="span" fontWeight="fontWeightBold">
                Frame Lens Material:
              </Box>
              <Box component="span" ml={1} className={clsx(classes.box)}>
                {productById?.details.frameLensMaterial}
              </Box>
            </Text>
            <Text gutterBottom variant="subtitle1">
              <Box component="span" fontWeight="fontWeightBold">
                Frame Attribution:
              </Box>
              <Box component="span" ml={1} className={clsx(classes.box)}>
                {productById?.details.frameAttribution}
              </Box>
            </Text>
            <Text gutterBottom variant="subtitle1">
              <Box component="span" fontWeight="fontWeightBold">
                Usages:
              </Box>
              <Box component="span" ml={1} className={clsx(classes.box)}>
                {productById?.details.usage}
              </Box>
            </Text>
            <Text gutterBottom variant="subtitle1">
              <Box component="span" fontWeight="fontWeightBold">
                Lens Function:
              </Box>
              <Box component="span" ml={1} className={clsx(classes.box)}>
                {productById?.details.lensFunction}
              </Box>
            </Text>
          </Grid>
          <RatingComponent />
        </Grid>
      </Container>
    </>
  );
};

export default ModelDetails;
