import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";


export default function MainDetails() {
  return (
    <>
      <Container>
        <Grid
          container
          alignItems="center"
          marginY="5%"
          justifyContent="center"
          spacing={2}
        >
          <Grid item lg={5} md={6} xs={10}>
            <Image height={300} width={400}  src="/responsive-framework.svg" alt="framework" />
          </Grid>
          <Grid item  alignContent="center" lg={5} md={6} xs={10} sx={{display: {xs: {textAlign: "center"}}}}>
            <Typography variant="h5" component="h6" color="primary">
              DEVELOP ACROSS ALL PLATFORMS
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "1rem", lineHeight: "32px" }}
              component="h6"
              color="dark"
            >
              Learn one way to build applications with Angular and reuse your
              code and abilities to build apps for any deployment target. For
              web, mobile web, native mobile and native desktop.
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          alignItems="center"
          marginY="5%"
          justifyContent="center"
          spacing={2}
        >
          <Grid item  alignContent="center" lg={5} md={6} xs={10} sx={{display: {xs: {textAlign: "center"}}}}>
            <Typography variant="h5" component="h6" color="primary">
              DEVELOP ACROSS ALL PLATFORMS
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "1rem", lineHeight: "32px" }}
              component="h6"
              color="dark"
            >
              Learn one way to build applications with Angular and reuse your
              code and abilities to build apps for any deployment target. For
              web, mobile web, native mobile and native desktop.
            </Typography>
          </Grid>
          <Grid item lg={5} md={6} xs={10}>
            <Image height={300} width={400}  src="/speed-performance.svg" alt="framework" />
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          alignItems="center"
          marginY="5%"
          justifyContent="center"
          spacing={2}
        >
          <Grid item lg={5} md={6} xs={10}>
            <Image height={250} width={400}  src="/devolopment.png" alt="framework" />
          </Grid>
          <Grid item  alignContent="center" lg={5} md={6} xs={10} sx={{display: {xs: {textAlign: "center"}}}}>
            <Typography variant="h5" component="h6" color="primary">
              DEVELOP ACROSS ALL PLATFORMS
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "1rem", lineHeight: "32px" }}
              component="h6"
              color="dark"
            >
              Learn one way to build applications with Angular and reuse your
              code and abilities to build apps for any deployment target. For
              web, mobile web, native mobile and native desktop.
            </Typography>
          </Grid>
          
        </Grid>
        <Divider />
        <Grid
          container
          alignItems="center"
          marginY="5%"
          justifyContent="center"
          spacing={2}
        >
         
          <Grid item  alignContent="center" lg={5} md={6} xs={10} sx={{display: {xs: {textAlign: "center"}}}}>
            <Typography variant="h5" component="h6" color="primary">
              DEVELOP ACROSS ALL PLATFORMS
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "1rem", lineHeight: "32px" }}
              component="h6"
              color="dark"
            >
              Learn one way to build applications with Angular and reuse your
              code and abilities to build apps for any deployment target. For
              web, mobile web, native mobile and native desktop.
            </Typography>
          </Grid>
          <Grid item lg={5} md={6} xs={10}>
            <Image height={250} width={400}  src="/loved-by-millions.svg" alt="framework" />
          </Grid>
        </Grid>
        <Divider />

      </Container>
    </>
  );
}
