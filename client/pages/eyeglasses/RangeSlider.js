import React, { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useRouter } from "next/router";

import {
  MinMaxFilter,
  productList,
} from "./../../src/redux/slices/productSlice";
import productApi from "../api/products";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  heading: {
    fontSize: "16px",
  },
});

function priceValue(value) {
  return value;
}

const RangeSlider = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { products } = useSelector(productList);
  const arr = products?.map(({ price }) => price);

  const minPrice = Math.min(...arr);
  const maxPrice = Math.max(...arr);

  const [value, setValue] = useState([minPrice, maxPrice]);

  useEffect(() => {
    dispatch(
      MinMaxFilter({
        lowerNum: Number(value[0]),
        upperNum: Number(value[1]),
      })
    );
  }, [value]);

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
              getAriaValueText={priceValue}
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
