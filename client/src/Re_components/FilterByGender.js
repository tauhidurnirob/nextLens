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
  console.log(state);

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

  const gender = [
    { name: "Men", checked: "men", totalProduct: counts.men },
    { name: "Women", checked: "women", totalProduct: counts.women },
    { name: "Kid", checked: "kid", totalProduct: counts.kid },
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
              <Box fontWeight="fontWeightBold">Filter By Gender</Box>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset">
              <FormGroup>
                {gender.map((item, index) => (
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

export default FilterByGender;
