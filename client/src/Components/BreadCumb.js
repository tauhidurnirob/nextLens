import React from "react";
import { Typography, Grid } from "@material-ui/core";

const BreadCumb = () => {
  return (
    <Grid
      container
      justifyContent="center"
      style={{
        padding: "10px",
        backgroundColor: "#000",
        position: "fixed",
        zIndex: 999,
      }}
    >
      <Typography variant="subtitle2" style={{ color: "#fff" }}>
        Shopping Services
      </Typography>
    </Grid>
  );
};

export default BreadCumb;
