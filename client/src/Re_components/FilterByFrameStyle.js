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
import { useSelector, useDispatch } from "react-redux";
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

const FilterByFrameStyle = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [expand, setExpand] = useState("expandBar");

  const { queries, counts } = useSelector(productSelector);

  const handleChangeBar = (panel) => (event, newExpanded) => {
    setExpand(newExpanded ? panel : false);
  };
  const [state, setState] =useState({
    halfFrame: false,
    fullFrame: false,
    rimless: false,
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
    { name: "Half Frame", checked: "halfFrame", total: counts.halfFrame },
    {
      name: "Full Frame",
      checked: "fullFrame",
      total: 211,
      total: counts.fullFrame,
    },
    { name: "Rimless", checked: "rimless", total: counts.rimless },
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
              <Box fontWeight="fontWeightBold">Filter By Frame Style</Box>
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

export default FilterByFrameStyle;
