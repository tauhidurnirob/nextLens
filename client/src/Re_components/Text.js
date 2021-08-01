import { Typography } from "@material-ui/core";
import React from "react";
import colors from "../config/colors";

const Text = ({ children, textColor, ...otherProps }) => {
  console.log(colors[textColor]);
  return (
    <Typography {...otherProps} style={{ color: colors[textColor] }}>
      {children}
    </Typography>
  );
};

export default Text;
