import { Grid, Typography } from "@mui/material";
import React from "react";

export default function index() {
  return (
    <Grid container height={"100vh"} justifyContent="start">
      <Grid
        item
        style={{
          backgroundColor: "#1e88e5",
          marginTop: "64px",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          color="white"
          sx={{ paddingY: "30px", marginX: "25px" }}
        >
          EVENTS
        </Typography>
      </Grid>
    </Grid>
  );
}
