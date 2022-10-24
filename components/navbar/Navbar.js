import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../assets/logo-nav@2x.png";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Divider, IconButton, InputBase } from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "15ch",
      },
    },
  },
}));

const pages = [
  {
    id: 1,
    name: "FEATURES",
    path: "/features",
  },
  {
    id: 3,
    name: "RESOURCES",
    path: "/resources",
  }
];

function Navbar() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav>
      <AppBar
        position={`${pathname === "/" ? "static" : "fixed"}`}
        sx={{
          backgroundColor: `${pathname === "/" ? "transparent" : "#1976d2"}`,
          boxShadow: `${pathname === "/" && "none"}`,
          position: "none",
        }}
      >
        <Container maxWidth="xxl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0, display: { xs: "block", md: "flex" } }}>
              <Link href="/">
                <Image
                  width={170}
                  height={40}
                  src={logo}
                  style={{ cursor: "pointer" }}
                  alt="logo"
                />
              </Link>
            </Box>

            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            ></Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page, idx) => (
                <Link key={idx} href={page.path}>
                  <Button
                    size="small"
                    sx={{
                      p: 2,
                      my: 0,
                      color: "white",
                      display: "block",
                      fontSize: "1rem",
                      paddingX: "1rem",
                      ":focus": {
                        borderBottom: `${
                          pathname === page.path && "2px solid #fff"
                        }`,
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "block", md: "flex" },
                backgroundColor: "42a5f5",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "block", md: "flex" } }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="dark-mode"
                sx={{ mx: 1 }}
              >
                <DarkModeIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "block", md: "flex" } }}>
              <Divider
                orientation="vertical"
                flexItem
                // sx={{ color: "inherit" }}
              />
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <IconButton
                size=""
                edge="start"
                color="inherit"
                aria-label="dark-mode"
                sx={{ p: 2 }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                size=""
                edge="start"
                color="inherit"
                aria-label="dark-mode"
                sx={{ p: 2 }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                size=""
                edge="start"
                color="inherit"
                aria-label="dark-mode"
                sx={{ p: 2 }}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
}
export default Navbar;
