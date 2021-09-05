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

import { productList } from "./../../src/redux/slices/productSlice";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  heading: {
    fontSize: "16px",
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const RangeSlider = () => {
  const classes = useStyles();

  const { products } = useSelector(productList);

  const arr = products?.map(({ price }) => price);

  const maxPrice = Math.max(...arr);
  const minPrice = Math.min(...arr);

  const [value, setValue] = useState([minPrice, maxPrice]);

  const [expand, setExpand] = useState("expandBar");

  const handleChangeBar = (panel) => (event, newExpanded) => {
    setExpand(newExpanded ? panel : false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              <Box fontWeight="fontWeightBold">Filter By Price</Box>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              min={minPrice}
              max={maxPrice}
            />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Grid>
  );
};

export default RangeSlider;
