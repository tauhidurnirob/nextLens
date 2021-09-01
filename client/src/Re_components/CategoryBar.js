import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Accordion,
  AccordionDetails,
  Grid,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Gender, FrameShare, FrameStyles, Shope } from "../Components/Menus";

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

const CategoryBar = ({ title }) => {
  const classes = useStyles();

  return (
    <Box component="div" className={clsx(classes.root)}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={clsx(classes.heading)}>
            <Box fontWeight="fontWeightBold">{title}</Box>
          </Typography>
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
