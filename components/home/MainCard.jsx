import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "../../assets/code-icon.svg";

export default function MainCard() {
  return (
    <Container>
      <Grid
        container="xl"
        alignItems="start"
        marginY="5%"
        justifyContent="center"
      >
        <Grid
          item
          lg={7}
          xs={11}
          spacing={2}
          sx={{
            boxShadow: "8px 12px 40px -19px rgba(0, 0, 0, 0.52)",
            ":hover": {
              boxShadow: "8px 12px 40px -19px rgba(0,0,0,1)",
            },
          }}
        >
          <Card sx={{ maxWidth: "auto" , boxShadow:"none", borderRadius: "10px"}}>
            <CardActionArea sx={{ display: "flex", padding: "1rem",borderRadius: "10px" }}>
              <Image src={logo} height={150} alt="" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  TRY IT NOW
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore Angular`s capabilities with a ready-made sample app.
                  No setup required.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
