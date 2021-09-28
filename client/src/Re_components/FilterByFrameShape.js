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

import { productSelector, queriesAction } from "../redux/slices/productSlice";

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

const FilterByFrameShape = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expand, setExpand] = useState("expandBar");

  const { counts, queries } = useSelector(productSelector);

  const handleChangeBar = (panel) => (event, newExpanded) => {
    setExpand(newExpanded ? panel : false);
  };
  const [state, setState] = useState({
    round: false,
    retroSquare: false,
    clubMaster: false,
    oval: false,
    rectangle: false,
    cateEye: false,
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

  const { black } = state;

  const filters = [
    { name: "Round", checked: "round", total: counts.round },
    { name: "RetroSquare", checked: "retroSquare", total: counts.retroSquare },
    { name: "ClubMaster", checked: "clubMaster", total: counts.clubMaster },
    { name: "Oval", checked: "oval", total: counts.oval },
    { name: "Rectangle", checked: "rectangle", total: counts.rectangle },
    { name: "CatEye", checked: "cateEye", total: counts.cateEye },
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
              <Box fontWeight="fontWeightBold">Filter By Frame Shape</Box>
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
                          <Box component="div">({item.total})</Box>
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

export default FilterByFrameShape;
