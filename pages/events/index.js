import { Typography } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import { Container } from "@mui/system";
import React from "react";

export default function index() {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          backgroundColor: "#1e88e5",
          marginTop: "64px",
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
      </div>



    </div>
  );
}
