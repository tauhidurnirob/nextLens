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
  Typography
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";



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

const FilterByGender = () => {
  const classes = useStyles();

  const [expand, setExpand] = useState("expandBar");

  const handleChangeBar = (panel) => (event, newExpanded) => {
    setExpand(newExpanded ? panel : false);
  };
  const [state, setState] = React.useState({
    men: false,
    women: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { men, women } = state;

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
              <Box fontWeight="fontWeightBold">Filter By Gender</Box>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={men}
                      onChange={handleChange}
                      name="men"
                    />
                  }
                  label={
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Box component="div">Men</Box>
                      <Box component="div">(242)</Box>
                    </Grid>
                  }
                />
                <Divider className={clsx(classes.divider)} />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={women}
                      onChange={handleChange}
                      name="women"
                    />
                  }
                  label={
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Box component="div">Women</Box>
                      <Box component="div">(9)</Box>
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

export default FilterByGender;
