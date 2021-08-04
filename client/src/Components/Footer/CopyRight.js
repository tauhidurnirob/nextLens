import React from "react";
import { Box, Grid } from "@material-ui/core";
import clsx from "clsx";

import { Text } from "../../Re_components";

const CopyRight = () => {
  return (
    <Grid container direction="row" justifyContent="center">
      <Grid item>
        <Text variant="subtitle1">
          <Box fontWeight={500}>
            Copyright &copy; {new Date().getFullYear()}. All right reserved.
          </Box>
        </Text>
      </Grid>
    </Grid>
  );
};

export default CopyRight;
