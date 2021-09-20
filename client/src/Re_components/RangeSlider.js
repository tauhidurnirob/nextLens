import React, { useState } from "react";
import {
  makeStyles,
  Slider,
  Accordion,
  Box,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  MinMaxFilter,
  productSelector,
} from "../../src/redux/slices/productSlice";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  heading: {
    fontSize: "16px",
  },
});

function priceValue(value) {
  return `${value}$`;
}

const RangeSlider = ({ updateRangeSlider }) => {
  const classes = useStyles();
  const { products } = useSelector(productSelector);

  const arr = products?.map(({ price }) => price);

  const maxPrice = Math.max(...arr);

  const [value, setValue] = useState([0, maxPrice]);

  const [expand, setExpand] = useState("expandBar");

  const handleChangeBar = (panel) => (event, newExpanded) => {
    setExpand(newExpanded ? panel : false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    updateRangeSlider(newValue);
  };

  return (
    <Grid item container justifyContent="center">
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
            <Typography className={clsx(classes.heading)}>
              <Box fontWeight="fontWeightBold">
                Filter By Price (${value[0]} - ${value[1]})
              </Box>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              getAriaLabel={() => "Next Lense Price"}
              value={value}
              min={0}
              max={maxPrice}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={priceValue}
            />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Grid>
  );
};

export default RangeSlider;
