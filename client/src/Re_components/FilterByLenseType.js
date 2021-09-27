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

  const [expand, setExpand] = useState("expandBar");

  const handleChangeBar = (panel) => (event, newExpanded) => {
    setExpand(newExpanded ? panel : false);
  };
  const [state, setState] = React.useState({
    frameOnly: false,
    basicLens: false,
    standardLense: false,
    premiumStandardLens: false,
    blueLightBlockGlass: false,
    antiFogLens: false,
  });

  console.log(state);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
                {filters.map((item) => (
                  <Fragment key={item.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state[item.id]}
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

export default FilterByLensType;

const filters = [
  { id: 1, name: "Frame Only", checked: "frameOnly", totalProduct: 250 },
  { id: 2, name: "Basic Lens", checked: "basicLens", totalProduct: 248 },
  { id: 3, name: "Standard Lens", checked: "standardLense", totalProduct: 248 },
  {
    id: 4,
    name: "Premium Standard Lens",
    checked: "premiumStandardLens",
    totalProduct: 163,
  },
  {
    id: 5,
    name: "Blue Light Block Glass",
    checked: "blueLightBlockGlass",
    totalProduct: 250,
  },
  { id: 6, name: "Anti Fog Lens", checked: "antiFogLens", totalProduct: 250 },
];
