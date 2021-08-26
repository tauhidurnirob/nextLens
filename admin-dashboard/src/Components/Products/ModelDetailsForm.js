import React from "react";
import {
  makeStyles,
  Box,
  FormControl,
  Grid,
  InputLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  OutlinedInput,
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    margin: `${theme.spacing(2)}px opx`,
  },
  gridItem: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ModelDetailsForm = ({ register }) => {
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
            <Box fontWeight="fontWeightBold">Model Details</Box>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="column" justifyContent="center">
            <Grid container direction="row" spacing={2} justifyContent="center">
              <Grid item md={4} className={clsx(classes.gridItem)}>
                <Box mb={2}>
                  <FormControl
                    className={clsx(classes.formControl)}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-frameMaterial">
                      Frame Material
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-frameMaterial"
                      type="text"
                      labelWidth={120}
                      inputProps={{ ...register("frameMaterial") }}
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item md={4} className={clsx(classes.gridItem)}>
                <Box mb={2}>
                  <FormControl
                    className={clsx(classes.formControl)}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-lensFunction">
                      Lens Function
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-lensFunction"
                      type="text"
                      labelWidth={105}
                      inputProps={{ ...register("lensFunction") }}
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item md={4} className={clsx(classes.gridItem)}>
                <Box mb={2}>
                  <FormControl
                    className={clsx(classes.formControl)}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-frameAttribution">
                      Frame Attribution
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-frameAttribution"
                      type="text"
                      labelWidth={135}
                      inputProps={{ ...register("frameAttribution") }}
                    />
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={2} justifyContent="center">
              <Grid item md={3} className={clsx(classes.gridItem)}>
                <Box mb={2}>
                  <FormControl
                    className={clsx(classes.formControl)}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-frameLensMaterial">
                      Frame Lens Material
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-frameLensMaterial"
                      type="text"
                      labelWidth={160}
                      inputProps={{ ...register("frameLensMaterial") }}
                    />
                  </FormControl>
                </Box>
              </Grid>

              <Grid item md={3} className={clsx(classes.gridItem)}>
                <Box mb={2}>
                  <FormControl
                    className={clsx(classes.formControl)}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-usage">
                      Usage
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-usage"
                      type="text"
                      labelWidth={50}
                      inputProps={{ ...register("usage") }}
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item md={3} className={clsx(classes.gridItem)}>
                <Box mb={2}>
                  <FormControl
                    className={clsx(classes.formControl)}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-modelNumber">
                      Model Number
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-modelNumber"
                      type="text"
                      labelWidth={115}
                      inputProps={{ ...register("modelNumber") }}
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item md={3} className={clsx(classes.gridItem)}>
                <Box mb={2}>
                  <FormControl
                    className={clsx(classes.formControl)}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-size">
                      Size
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-size"
                      type="text"
                      labelWidth={30}
                      inputProps={{ ...register("size") }}
                    />
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ModelDetailsForm;
