import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Accordion,
  AccordionDetails,
  Grid,
  AccordionSummary,
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Gender, FrameShare, FrameStyles, Shope } from "../Components/Menus";
import Text from "./Text";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: `85px`,
    marginBottom: `25px`,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const CategoryBar = () => {
  const classes = useStyles();
  // const [expand, setExpand] = useState("expandBar");

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpand(newExpanded ? panel : false);
  // };

  return (
    <Box component="div" className={clsx(classes.root)}>
      <Accordion
      // expanded={expand === "expandBar"}
      // onChange={handleChange("expandBar")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Text className={clsx(classes.heading)}>
            <Box fontWeight="fontWeightBold">EYE GLASSES</Box>
          </Text>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="row">
            <Gender title="GENDER" />
            <FrameShare title="FRAME SHARE" />
            <FrameStyles title="FRAME STYLES" />
            <Shope title="SHOPE BY COLLECTION" />
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CategoryBar;
