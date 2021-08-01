import { Typography } from "@material-ui/core";
import React from "react";
import colors from "../config/colors";

const Text = ({ children, textColor, ...otherProps }) => {
  return <Typography {...otherProps}>{children}</Typography>;
};

export default Text;
