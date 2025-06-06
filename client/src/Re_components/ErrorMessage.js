import React from "react";
import { Typography } from "@material-ui/core";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <Typography style={{ color: "red" }}>{error}</Typography>;
};

export default ErrorMessage;
