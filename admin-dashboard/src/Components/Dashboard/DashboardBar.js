import React from "react";
import { Bar } from "react-chartjs-2";
import { Box, Typography, Grid } from "@material-ui/core";

const options = {
  legend: { display: false },
};

const DashboardBar = ({ salesPrice, revenue }) => (
  <>
    <Box component="div" className="header">
      <Typography align="center" variant="h5" className="title">
        Sale History
      </Typography>
    </Box>
    <Grid container justifyContent="center">
      <Grid item container md={10}>
        <Bar
          data={{
            labels: salesPrice,
            datasets: [
              {
                label: `Total revenue $${revenue}`,
                data: salesPrice,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={options}
        />
      </Grid>
    </Grid>
  </>
);

export default DashboardBar;
