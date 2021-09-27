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
import { useSelector, useDispatch } from "react-redux";

import {
  productSelector,
  setProducts,
  fetchedProducts,
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

const FilterByGender = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [expand, setExpand] = useState("expandBar");

  const { counts, queries } = useSelector(productSelector);

  const handleChangeBar = (panel) => (event, newExpanded) => {
    setExpand(newExpanded ? panel : false);
  };
  const [state, setState] = React.useState({
    men: false,
    women: false,
    kid: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    dispatch(
      queriesAction({
        ...queries,
        ...state,
        [event.target.name]: event.target.checked,
      })
    );
  };

  const { men, women, kid } = state;

  useEffect(() => {
    const getGenderProduct = async () => {
      if (men || women || kid) {
        const { data } = await productApi.getProductsByGender(
          men ? "men" : "",
          women ? "women" : "",
          kid ? "kid" : ""
        );
        dispatch(fetchedProducts(data?.products));
      }

      if (!men && !women && !kid) {
        const { data } = await productApi.getAllProductByLimit(12);
        dispatch(setProducts(data?.products));
      }
    };
    getGenderProduct();
  }, [men, women, kid]);
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
                      <Box component="div">({counts.men})</Box>
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
                      <Box component="div">({counts.women})</Box>
                    </Grid>
                  }
                />
                <Divider className={clsx(classes.divider)} />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={kid}
                      onChange={handleChange}
                      name="kid"
                    />
                  }
                  label={
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Box component="div">kid</Box>
                      <Box component="div">({counts.kid})</Box>
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
