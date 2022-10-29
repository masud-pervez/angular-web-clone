import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import featuresDb from "../../components/database/features_DB";

export default function Features() {
  console.log(featuresDb);
  return (
    <div style={{ height: "auto" }}>
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
          FEATURES & BENEFITS
        </Typography>
      </div>

      <Container>
        {featuresDb.map((item, idx) => {
          return (
            <div key={idx}>
              <Divider />
              <Typography
                variant="h5"
                color="primary"
                component="h5"
                textAlign="center"
                marginTop="35px"
              >
                {item.title}
              </Typography>
              <Typography
                variant="img"
                marginY={2}
                component="p"
                textAlign="center"
                style={{ alignItems: "center" }}
              >
                <Image height={80} src={item.image} alt="logo" />
              </Typography>

              <Grid
                container="lg"
                justifyContent="center"
                spacing={2}
                marginBottom="50px"
              >
                {item.items.map((itm, idx) => (
                  <Grid item xs={10} md={3} key={idx}>
                    <Typography variant="h6" component="h6">
                      {itm.itemName}
                    </Typography>
                    <Typography
                      variant="p"
                      color={"#444"}
                      component="p"
                      lineHeight={2}
                    >
                      {itm.itemDetails}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </div>
          );
        })}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <Link href="/">
            <Button
            size="large"
              sx={{ 
                width: "200px",
                transform: "scale(0.9)",
                borderRadius: "50px",
                fontSize: "16px",
                ":hover":{
                  transform: "scale(1)",
                  transition: "all .2s ease-in-out",
                  textDecoration: "underline"
                }
              }}
              variant="contained"
            >
              GET STARTED
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
