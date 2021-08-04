import React from "react";
import { makeStyles, Grid, Box } from "@material-ui/core";
import clsx from "clsx";

import { Text } from "../../Re_components";
import NewsletterForm from "./NewsletterForm";

const useStyles = makeStyles((theme) => ({
  text: { display: "flex", fontWeight: "500", fontSize: "16px" },
  box: { display: "flex", fontWeight: "bold" },
}));

const Newsletter = () => {
  const classes = useStyles();

  return (
    <Grid item container md={6}>
      <Grid container direction="column">
        <Text gutterBottom variant="h6">
          <Box fontWeight="fontWeightBold">Newsletter Subscription</Box>
        </Text>
        <Box mt={2} mb={2}>
          <Text gutterBottom variant="subtitle1" className={clsx(classes.text)}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            deserunt iusto voluptas ipsam neque necessitatibus iure tempora
            maxime ad hic!
          </Text>
        </Box>
        <NewsletterForm />
      </Grid>
    </Grid>
  );
};

export default Newsletter;
