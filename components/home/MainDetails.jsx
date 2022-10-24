import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import speedImage from "../../assets/speed-performance.svg";
import toolingImge from "../../assets/devolopment.png";
import loveImage from "../../assets/loved-by-millions.svg";
import Image from "next/image";
import logo1 from "../../assets/responsive-framework.svg";

export default function MainDetails() {
  return (
    <>
      <Container>
        <Grid
          container="xl"
          alignItems="start"
          marginY="5%"
          justifyContent="center"
          spacing={2}
        >
          <Grid alignContent="start" item lg={5} md={6} xs={6}>
            <Image height={500} src={logo1} alt="" />
          </Grid>
          <Grid item  alignContent="center" lg={5} md={6} xs={7} sx={{display: {xs: {textAlign: "center"}}}}>
            <Typography variant="h5" component="h6" color="primary">
              DEVELOP ACROSS ALL PLATFORMS
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "17px", lineHeight: "30px" }}
              component="h6"
              color="dark"
            >
              Learn one way to build applications with Angular and reuse your
              code and abilities to build apps for any deployment target. For
              web, mobile web, native mobile and native desktop.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Divider />
      <Container>
        <Grid
          container="xl"
          alignItems="start"
          marginY="5%"
          justifyContent="center"
          spacing={2}
        >
          <Grid item lg={5} md={6} xs={7}>
            <Typography variant="h5" component="h6" color="primary">
              DEVELOP ACROSS ALL PLATFORMS
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "17px", lineHeight: "30px" }}
              component="h6"
              color="dark"
            >
              Achieve the maximum speed possible on the Web Platform today, and
              take it further, via Web Workers and server-side rendering.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "17px", lineHeight: "30px" }}
              component="h6"
              color="dark"
            >
              Angular puts you in control over scalability. Meet huge data
              requirements by building data models on RxJS, Immutable.js or
              another push-model.
            </Typography>
          </Grid>
          <Grid item lg={5} xs={12}>
            <Image height={500} src={speedImage} alt="" />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container>
        <Grid
          container="xl"
          alignItems="start"
          marginY="5%"
          justifyContent="center"
          spacing={2}
        >
          <Grid item lg={5} xs={12}>
            <Image height={200} width={400} src={toolingImge} alt="" />
          </Grid>
          <Grid item lg={5} xs={12}>
            <Typography variant="h5" component="h6" color="primary">
              DEVELOP ACROSS ALL PLATFORMS
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "17px", lineHeight: "30px" }}
              component="h6"
              color="dark"
            >
              Achieve the maximum speed possible on the Web Platform today, and
              take it further, via Web Workers and server-side rendering.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "17px", lineHeight: "30px" }}
              component="h6"
              color="dark"
            >
              Angular puts you in control over scalability. Meet huge data
              requirements by building data models on RxJS, Immutable.js or
              another push-model.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container>
        <Grid
          container="xl"
          alignItems="start"
          marginY="5%"
          justifyContent="center"
          spacing={2}
        >
          <Grid item lg={5} xs={12}>
            <Typography variant="h5" component="h6" color="primary">
              DEVELOP ACROSS ALL PLATFORMS
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "17px", lineHeight: "30px" }}
              component="h6"
              color="dark"
            >
              Achieve the maximum speed possible on the Web Platform today, and
              take it further, via Web Workers and server-side rendering.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "17px", lineHeight: "30px" }}
              component="h6"
              color="dark"
            >
              Angular puts you in control over scalability. Meet huge data
              requirements by building data models on RxJS, Immutable.js or
              another push-model.
            </Typography>
          </Grid>
          <Grid item lg={5} xs={12}>
            <Image
              style={{ height: "60%", width: "80%" }}
              src={loveImage}
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
