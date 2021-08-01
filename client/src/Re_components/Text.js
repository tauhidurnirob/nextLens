import { Typography } from "@material-ui/core";
import React from "react";

const Text = ({ children, ...otherProps }) => {
  return <Typography {...otherProps}>{children}</Typography>;
};

export default Text;
