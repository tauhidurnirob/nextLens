import React from "react";
import { Typography } from "@material-ui/core";

const Text = ({ children, ...otherProps }) => {
  return <Typography {...otherProps}>{children}</Typography>;
};

export default Text;
