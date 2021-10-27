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
        Stay Stylish This Spooky Season
      </Typography>
    </Grid>
  );
};

export default BreadCumb;
