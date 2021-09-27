import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Accordion,
  Box,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Divider,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDispatch } from "react-redux";

import {
  productSelector,
  fetchedProducts,
  setProducts,
  queriesAction,
} from "../redux/slices/productSlice";
import productApi from "../../pages/api/products";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  heading: {
    fontSize: "16px",
  },
  divider: {
    width: "284px",
    height: "1px",
  },
});

const FilterByColor = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { counts, queries } = useSelector(productSelector);

  const [expand, setExpand] = useState("expandBar");

  const handleChangeBar = (panel) => (event, newExpanded) => {
    setExpand(newExpanded ? panel : false);
  };

  const [state, setState] = useState({
    black: false,
    white: false,
  });
  const { black, white } = state;

  const blackOnChange = async (event) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
    black(event.target.checked);
  };

  const whiteOnChange = async (event) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
    white(event.target.checked);
  };

  const handleOnChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    dispatch(
      queriesAction({
        ...queries,
        ...state,
        [event.target.name]: event.target.checked,
      })
    );
  };

  // useEffect(() => {
  //   const getColorProduct = async () => {
  //     if (black || white) {
  //       const { data } = await productApi.getProductsByColor(
  //         black ? "black" : "",
  //         white ? "white" : ""
  //       );
  //       dispatch(fetchedProducts(data?.products));
  //     }

  //     if (!black && !white) {
  //       const { data } = await productApi.getAllProductByLimit(12);
  //       dispatch(setProducts(data?.products));
  //     }
  //   };
  //   getColorProduct();
  // }, [black, white]);

  return (
    <Grid item container justifyContent="center">
      <Box mb={3} className={clsx(classes.root)}>
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
              <Box fontWeight="fontWeightBold">Filter By Color</Box>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={black}
                      onChange={handleOnChange}
                      name="black"
                    />
                  }
                  label={
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Box component="div">Black</Box>
                      <Box component="div">({counts.black})</Box>
                    </Grid>
                  }
                />
                <Divider className={clsx(classes.divider)} />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={white}
                      onChange={handleOnChange}
                      name="white"
                    />
                  }
                  label={
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Box component="div">White</Box>
                      <Box component="div">({counts.white})</Box>
                    </Grid>
                  }
                />
                <Divider className={clsx(classes.divider)} />
              </FormGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Grid>
  );
};

export default FilterByColor;
