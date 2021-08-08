import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Box,
  Accordion,
  AccordionDetails,
  Grid,
} from "@material-ui/core";
import clsx from "clsx";

import { Gender, FrameShare, FrameStyles, Shope } from "../Components/Menus";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: `85px`,
  },
}));

const CategoryBar = () => {
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
