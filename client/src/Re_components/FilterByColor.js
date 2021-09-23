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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useRouter } from "next/router";

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

const FilterByColor = () => {
  const classes = useStyles();
  const router = useRouter();
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

  useEffect(() => {
    const getColorProduct = async () => {
      const color = (state.black && "black") || (state.white && "white");

      if (color) {
        router.push({
          // pathname: "/eyeglasses/keyword/[keyword]",
          // pathname: "/post?foo=bar",
          query: { color: color },
        });
      }
    };
    getColorProduct();
  }, [state]);

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
