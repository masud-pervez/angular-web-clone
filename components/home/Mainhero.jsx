import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import style from "./main.module.css";
import Image from "next/image";

export default function Mainhero() {
  return (
    <div>
      <div className={`${style.hero} , ${style.background}`}></div>
      <Container>
        <Grid
          container="xl"
          alignItems="center"
          justifyContent="center"
          className="hero background-sky"
        >
          <Grid item lg={6} sm={6}>
            <Image src="/angular.svg" alt="" width={600} height={400} />
          </Grid>

          <Grid item lg={6} textAlign="start" sm={6}>
            <div className={style.button}>
              <Typography className={style.heading}>
                {"The modern web developer's platform"}
              </Typography>
              <Button
                variant="contained"
                color="inherit"
                sx={{
                  background: "#fff",
                  my: 3,
                  borderRadius: "30px",
                  transition: "all 0.3",
                  ":hover": {
                    textDecoration: "underline",
                    background: "#EAF3FB",
                  },
                }}
              >
                <Typography
                  color="primary"
                  variant="h6"
                  component="a"
                  textAlign={{ xm: "center" }}
                  sx={{ padding: "3px 15px" }}
                >
                  GET STARTED
                </Typography>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
