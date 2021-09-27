import React, { useState, Fragment } from "react";
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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { productSelector, queriesAction } from "./../redux/slices/productSlice";

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

const FilterByLensType = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { queries } = useSelector(productSelector);
  const [expand, setExpand] = useState("expandBar");

  console.log(queries);
  const handleChangeBar = (panel) => (event, newExpanded) => {
    setExpand(newExpanded ? panel : false);
  };
  const [state, setState] = useState({
    frameOnly: false,
    basicLens: false,
    standardLense: false,
    premiumStandardLens: false,
    blueLightBlockGlass: false,
    antiFogLens: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    dispatch(
      queriesAction({
        ...queries,
        ...state,
        [event.target.name]: event.target.checked,
      })
    );
  };

  const filters = [
    { name: "Frame Only", checked: "frameOnly", totalProduct: 250 },
    { name: "Basic Lens", checked: "basicLens", totalProduct: 248 },
    { name: "Standard Lens", checked: "standardLense", totalProduct: 248 },
    {
      name: "Premium Standard Lens",
      checked: "premiumStandardLens",
      totalProduct: 163,
    },
    {
      name: "Blue Light Block Glass",
      checked: "blueLightBlockGlass",
      totalProduct: 250,
    },
    { name: "Anti Fog Lens", checked: "antiFogLens", totalProduct: 250 },
  ];

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
              <Box fontWeight="fontWeightBold">Filter By Lense Type</Box>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset">
              <FormGroup>
                {filters.map((item, index) => (
                  <Fragment key={index}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state[index]}
                          onChange={handleChange}
                          name={item.checked}
                        />
                      }
                      label={
                        <Grid
                          container
                          direction="row"
                          justifyContent="space-between"
                        >
                          <Box component="div">{item.name}</Box>
                          <Box component="div">({item.totalProduct})</Box>
                        </Grid>
                      }
                    />
                    <Divider className={clsx(classes.divider)} />
                  </Fragment>
                ))}
              </FormGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Grid>
  );
};

export default FilterByLensType;
