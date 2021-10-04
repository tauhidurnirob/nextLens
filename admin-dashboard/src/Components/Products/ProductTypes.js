import React from "react";
import {
  makeStyles,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  FormHelperText,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    width: "100%",
  },
  formControl: {
    width: "100%",
    margin: `${theme.spacing(2)}px opx`,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ProductTypes = ({ register, errors }) => {
  const classes = useStyles();
  return (
    <Box mb={2}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={clsx(classes.heading)}>
            <Box fontWeight="fontWeightBold">Product Types</Box>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="row" spacing={2} justifyContent="center">
            <Grid item md={4} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl
                  variant="outlined"
                  className={clsx(classes.formControl)}
                >
                  <InputLabel id="availability">Availability</InputLabel>
                  <Select
                    labelId="availability"
                    id="availability"
                    label="availability"
                    inputProps={{ ...register("availability") }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {availability?.map((item, index) => (
                      <MenuItem key={index} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {errors.availability && (
                  <FormHelperText>
                    <Typography style={{ color: "red" }} variant="subtitle2">
                      {errors.availability?.message}
                    </Typography>
                  </FormHelperText>
                )}
              </Box>
            </Grid>
            <Grid item md={4} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl
                  variant="outlined"
                  className={clsx(classes.formControl)}
                >
                  <InputLabel id="type">Type</InputLabel>

                  <Select
                    inputProps={{ ...register("type") }}
                    labelId="type"
                    id="type"
                    label="Type"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {types?.map((item, index) => (
                      <MenuItem key={index} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {errors.type && (
                  <FormHelperText>
                    <Typography style={{ color: "red" }} variant="subtitle2">
                      {errors.type?.message}
                    </Typography>
                  </FormHelperText>
                )}
              </Box>
            </Grid>
            <Grid item md={4} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl
                  variant="outlined"
                  className={clsx(classes.formControl)}
                >
                  <InputLabel id="category">Category</InputLabel>
                  <Select
                    inputProps={{ ...register("category") }}
                    labelId="category"
                    id="category"
                    label="Category"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {categories?.map((item, index) => (
                      <MenuItem key={index} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {errors.category && (
                  <FormHelperText>
                    <Typography style={{ color: "red" }} variant="subtitle2">
                      {errors.category?.message}
                    </Typography>
                  </FormHelperText>
                )}
              </Box>
            </Grid>
            <Grid item md={4} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl
                  variant="outlined"
                  className={clsx(classes.formControl)}
                >
                  <InputLabel id="category">Frame Shape</InputLabel>
                  <Select
                    inputProps={{ ...register("frameShape") }}
                    labelId="frameShape"
                    id="frameShape"
                    label="frameShape"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {frameShape?.map((item, index) => (
                      <MenuItem key={index} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {errors.frameShape && (
                  <FormHelperText>
                    <Typography style={{ color: "red" }} variant="subtitle2">
                      {errors.frameShape?.message}
                    </Typography>
                  </FormHelperText>
                )}
              </Box>
            </Grid>
            <Grid item md={4} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl
                  variant="outlined"
                  className={clsx(classes.formControl)}
                >
                  <InputLabel id="category">Frame Styles</InputLabel>
                  <Select
                    inputProps={{ ...register("frameStyles") }}
                    labelId="frameStyles"
                    id="frameStyles"
                    label="frameStyles"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {frameStyles?.map((item, index) => (
                      <MenuItem key={index} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {errors.frameStyles && (
                  <FormHelperText>
                    <Typography style={{ color: "red" }} variant="subtitle2">
                      {errors.frameStyles?.message}
                    </Typography>
                  </FormHelperText>
                )}
              </Box>
            </Grid>
            <Grid item md={4} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl
                  variant="outlined"
                  className={clsx(classes.formControl)}
                >
                  <InputLabel id="category">Shop Collection</InputLabel>
                  <Select
                    inputProps={{ ...register("shopCollection") }}
                    labelId="shopCollection"
                    id="shopCollection"
                    label="shopCollection"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {shopCollection?.map((item, index) => (
                      <MenuItem key={index} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {errors.shopCollection && (
                  <FormHelperText>
                    <Typography style={{ color: "red" }} variant="subtitle2">
                      {errors.shopCollection?.message}
                    </Typography>
                  </FormHelperText>
                )}
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ProductTypes;

const types = [
  { name: "Frame Only" },
  { name: "Basic Lense" },
  { name: "Standard Lense" },
  { name: "Premium Standard Lense" },
  { name: "Blue Light Block Glass" },
];

const categories = [
  { name: "Men" },
  { name: "Women" },
  { name: "Kid" },
  { name: "Eyeglasses" },
  { name: "Sunglasses" },
  { name: "Blue Light Block Glass" },
];
const availability = [{ name: "In Stock " }, { name: "Stock Out" }];

const frameShape = [
  { name: "Round " },
  { name: "Retro Square " },
  { name: "CLub Master" },
  { name: "Oval" },
  { name: "Rectangle " },
  { name: "Cat Eye" },
];

const frameStyles = [
  { name: "Half Frame" },
  { name: "Full Frame" },
  { name: "Rim Less" },
];

const shopCollection = [{ name: "Economy " }, { name: "Premium " }];
