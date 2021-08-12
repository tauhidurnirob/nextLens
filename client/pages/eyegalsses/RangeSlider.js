import React, { useState } from "react";
import {
  makeStyles,
  Slider,
  Accordion,
  Box,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Text } from "../../src/Re_components";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: "20px",
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const RangeSlider = () => {
  const classes = useStyles();
  const [value, setValue] = useState([0, 37]);

  const [expand, setExpand] = useState("expandBar");

  const handleChangeBar = (panel) => (event, newExpanded) => {
    setExpand(newExpanded ? panel : false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box mt={2} mb={3} className={clsx(classes.root)}>
      <Accordion
        expanded={expand === "expandBar"}
        onChange={handleChangeBar("expandBar")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Text className={clsx(classes.heading)}>
            <Box fontWeight="fontWeightBold">Filter By Price</Box>
          </Text>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default RangeSlider;
