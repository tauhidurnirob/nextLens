import React, { useState } from "react";
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
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Text } from "../../src/Re_components";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  heading: {
    fontSize: "16px",
  },
  divider: {
    width: "284px",
  },
  removeDivider: {
    display: "none",
  },

  "@global": {
    "span.MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1": {
      width: "100%",
    },
  },
});

const FilterByLensType = () => {
  const classes = useStyles();

  const [expand, setExpand] = useState("expandBar");

  const handleChangeBar = (panel) => (event, newExpanded) => {
    setExpand(newExpanded ? panel : false);
  };
  const [state, setState] = React.useState({
    black: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { black } = state;

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
            <Text className={clsx(classes.heading)}>
              <Box fontWeight="fontWeightBold">Filter By Lense Type</Box>
            </Text>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset">
              <FormGroup>
                {filters.map((item, index) => (
                  <>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={black}
                          onChange={handleChange}
                          name="black"
                        />
                      }
                      key={index}
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
                    <Divider
                      className={clsx(classes.divider, {
                        [classes.removeDivider]: item.remove,
                      })}
                    />
                  </>
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

const filters = [
  { name: "Frame Only", total: 250 },
  { name: "Basic Lens", total: 248 },
  { name: "Standard Lens", total: 248 },
  { name: "Premium Standard Lens", total: 163 },
  { name: "Blue Light Block Glass", total: 250 },
  { name: "Anti Fog Lens", total: 250, remove: true },
];
