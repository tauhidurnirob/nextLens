import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import clsx from "clsx";

const CopyRight = () => {
  return (
    <Grid container direction="row" justifyContent="center">
      <Grid item>
        <Typography variant="subtitle1">
          <Box fontWeight={500}>
            Copyright &copy; {new Date().getFullYear()}. All right reserved.
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CopyRight;
