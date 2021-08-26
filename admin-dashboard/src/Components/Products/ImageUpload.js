import React from "react";
import {
  makeStyles,
  Box,
  FormControl,
  Grid,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormHelperText,
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  uploadBtn: {
    width: "100%",
    padding: "15px 0px",
  },
  formControl: {
    width: "100%",
    margin: `${theme.spacing(2)}px opx`,
  },
  gridItem: {
    width: "100%",
  },
  input: {
    display: "none",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ImageUpload = ({ register, errors }) => {
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
            <Box fontWeight="fontWeightBold">Image Upload</Box>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="row" spacing={2}>
            <Grid item md={3} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl className={clsx(classes.formControl)}>
                  <input
                    accept="image/*"
                    className={clsx(classes.input)}
                    id="contained-button-file"
                    multiple
                    type="file"
                    {...register("image")}
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="outlined"
                      color="primary"
                      component="span"
                      className={clsx(classes.uploadBtn)}
                    >
                      Product Image
                    </Button>
                  </label>
                </FormControl>
                {errors.image && (
                  <FormHelperText>
                    <Typography style={{ color: "red" }} variant="subtitle2">
                      {errors.image?.message}
                    </Typography>
                  </FormHelperText>
                )}
              </Box>
            </Grid>
            <Grid item md={3} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl className={clsx(classes.formControl)}>
                  <input
                    accept="image/*"
                    className={clsx(classes.input)}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="outlined"
                      color="primary"
                      component="span"
                      className={clsx(classes.uploadBtn)}
                    >
                      Virtual Front
                    </Button>
                  </label>
                </FormControl>
              </Box>
            </Grid>
            <Grid item md={3} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl className={clsx(classes.formControl)}>
                  <input
                    accept="image/*"
                    className={clsx(classes.input)}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="outlined"
                      color="primary"
                      component="span"
                      className={clsx(classes.uploadBtn)}
                    >
                      Virtual Right
                    </Button>
                  </label>
                </FormControl>
              </Box>
            </Grid>
            <Grid item md={3} className={clsx(classes.gridItem)}>
              <Box mb={2}>
                <FormControl className={clsx(classes.formControl)}>
                  <input
                    accept="image/*"
                    className={clsx(classes.input)}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="outlined"
                      color="primary"
                      component="span"
                      className={clsx(classes.uploadBtn)}
                    >
                      Virtual Left
                    </Button>
                  </label>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ImageUpload;
