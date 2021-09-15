import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={clsx(classes.root)}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
