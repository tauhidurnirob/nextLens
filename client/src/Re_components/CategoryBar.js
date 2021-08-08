import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@material-ui/core";
import clsx from "clsx";

import Text from "./Text";
import { Gender, FrameShare, FrameStyles } from "../Components/Menus";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: `85px`,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const CategoryBar = ({ title }) => {
  const classes = useStyles();
  const [show, handleShow] = useState(false);
  const [expand, setExpand] = useState(show);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpand(newExpanded ? panel : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return;
  }, [null]);

  return (
    <Box component="div" className={clsx(classes.root)}>
      <Accordion expanded={expand === show} onChange={handleChange(show)}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Text className={clsx(classes.heading)}>
            <Box fontWeight="fontWeightBold">Accordion 1 {title}</Box>
          </Text>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="row">
            <Gender title="GENDER" />
            <FrameShare title="FRAME SHARE" />
            <FrameStyles title="FRAME STYLES" />
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CategoryBar;
