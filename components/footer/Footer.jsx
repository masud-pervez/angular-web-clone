import { Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import styles from "./Footer.module.css";
import footerData from "./footer_DB";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <Grid container spacing={2}>
          {footerData.map((item, idx) => (
            <Grid item xs={6} md={3} key={idx}>
              <Typography color="white">{item.heading}</Typography>
              <ul className={styles.oderlist}>
                {item.lists.map((item , idx) => (
                  <li key={idx}>
                    <Link href="#" sx={{ color: "white" }}>
                      {item.listName}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Typography textAlign="center" color="white">
          Super-powered by Google ©2010-2022.
        </Typography>
        <Typography textAlign="center" color="white" lineHeight="2rem">
          Code licensed under an MIT-style License. Documentation licensed under
          CC BY 4.0.
        </Typography>
        <Typography textAlign="center" color="white">
          Version 14.2.8-local+sha.7c4f77a062.
        </Typography>
      </Container>
    </div>
  );
}
