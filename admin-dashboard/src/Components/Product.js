import React from "react";
import {
  Container,
  makeStyles,
  Box,
  Paper,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(2) },
  formControl: {
    width: "100%",
    margin: `${theme.spacing(2)}px opx`,
  },
}));

const Product = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Paper className={clsx(classes.root)}>
        <form>
          <Box mb={2}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-name"
                label="Name"
                variant="outlined"
                name="name"
              />
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-Description"
                label="Description"
                variant="outlined"
                multiline
                minRows={4}
                maxRows={8}
              />
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-Unit"
                label="Unit"
                variant="outlined"
                name="unit"
              />
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-price"
                label="Price"
                variant="outlined"
                name="price"
                type="number"
              />
            </FormControl>
          </Box>

          <Box mb={2}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-sales-price"
                label="Sales Price"
                variant="outlined"
                name="salesPrice"
                type="number"
              />
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-discount"
                label="Discount"
                variant="outlined"
                name="discount"
                type="number"
              />
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl className={clsx(classes.formControl)}>
              <TextField
                id="outlined-product-quantity"
                label="Quantity"
                variant="outlined"
                name="quantity"
                type="number"
              />
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl
              variant="outlined"
              className={clsx(classes.formControl)}
            >
              <InputLabel id="type">Type</InputLabel>
              <Select labelId="type" id="type" label="Type">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {types?.map((item, index) => (
                  <MenuItem key={index} value={index + 1}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl
              variant="outlined"
              className={clsx(classes.formControl)}
            >
              <InputLabel id="category">Category</InputLabel>
              <Select labelId="category" id="category" label="Category">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {categories?.map((item, index) => (
                  <MenuItem key={index} value={index + 1}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Product;

const types = [
  { name: "Grocery" },
  { name: "Women Cloths" },
  { name: "Bags" },
  { name: "Makeup" },
];

const categories = [
  { name: "Frame Only" },
  { name: "Basic Lens" },
  { name: "Standard Lens" },
  { name: "Premium Standard Lens" },
  { name: "Blue Light Block Glass" },
  { name: "Anti Fog Lens" },
];
