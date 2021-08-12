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
    height: "1px",
  },
  "@global": {
    "span.MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1": {
      width: "100%",
    },
  },
});

const FilterByColor = () => {
  const classes = useStyles();

  const [expand, setExpand] = useState("expandBar");

  const handleChangeBar = (panel) => (event, newExpanded) => {
    setExpand(newExpanded ? panel : false);
  };
  const [state, setState] = React.useState({
    black: false,
    white: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { black, white } = state;

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
              <Box fontWeight="fontWeightBold">Filter By Color</Box>
            </Text>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={black}
                      onChange={handleChange}
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
                      <Box component="div">(105)</Box>
                    </Grid>
                  }
                />
                <Divider className={clsx(classes.divider)} />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={white}
                      onChange={handleChange}
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
                      <Box component="div">(10)</Box>
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
