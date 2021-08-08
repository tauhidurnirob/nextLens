import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import clsx from "clsx";

import Text from "./Text";

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

  const [expand, setExpand] = useState("expandBar");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpand(newExpanded ? panel : false);
  };
  return (
    <Box component="div" className={clsx(classes.root)}>
      <Accordion
        expanded={expand === "expandBar"}
        onChange={handleChange("expandBar")}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Text className={clsx(classes.heading)}>
            <Box fontWeight="fontWeightBold">Accordion 1 {title}</Box>
          </Text>
        </AccordionSummary>
        <AccordionDetails>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Text>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CategoryBar;
