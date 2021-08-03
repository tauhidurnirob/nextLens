import { Button } from "@material-ui/core";
import React from "react";

const AppButton = ({ children, ...otherProps }) => {
  return <Button {...otherProps}>{children}</Button>;
};

export default AppButton;
