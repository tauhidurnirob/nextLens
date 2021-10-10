import React from "react";
import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: theme.zIndex.drawer + 1,
    height: "100%",
  },
}));

const Loading = ({ visible }) => {
  const classes = useStyles();
  return (
    <Backdrop open={visible} className={clsx(classes.root)}>
      <CircularProgress color="secondary" />
    </Backdrop>
  );
};

export default Loading;
