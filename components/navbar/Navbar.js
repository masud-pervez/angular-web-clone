import {useContext, useState}  from "react";
import {
  Divider,
  IconButton,
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
} from "@mui/material";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { Search , SearchIconWrapper , StyledInputBase} from "./Search";
import  pages from "./pages"
// icons
import DarkModeIcon from "@mui/icons-material/DarkMode";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LightModeIcon from "@mui/icons-material/LightMode";
import Drawer from "./Drawer";

function Navbar({ ColorModeContext }) {
  const [toggle, setToggle] = useState(true) 

  const router = useRouter();
  const theme = useTheme();
  const { pathname } = router;
  const colorMode = useContext(ColorModeContext);

  const appbar = {
    backgroundColor: `${pathname === "/" ? "transparent" : "#1976d2"}`,
    boxShadow: `${pathname === "/" && "none"}`,
    position: "none",
  };

  const handleClick = () => {
    setToggle(!toggle);
    console.log(toggle);
    
  }
  return (
    <nav>
      <AppBar position={`${pathname === "/" ? "static" : "fixed"}`} sx={appbar}>
        <Container maxWidth="xxl">
          <Toolbar disableGutters>
            
            <Box sx={{ flexGrow: 0, display: { xs: "block", md: "none" } }}>
              <Button
                color="inherit"
                aria-label="menu"
                variant="center"
                onClick={handleClick}
              >
                
                <Drawer />
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "block", md: "none" } }}>
              <Link href="/">
                <Image
                  width={50}
                  height={40}
                  src={"/shield-large.svg"}
                  style={{ cursor: "pointer" }}
                  alt="logo"
                />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Link href="/">
                <Image
                  width={170}
                  height={40}
                  src={"/logo-nav@2x.png"}
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
                  <SearchIcon style={{ color: "gray" }} />
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
                onClick={colorMode.toggleColorMode}
              >
                {theme.palette.mode === "dark" ? (
                  <LightModeIcon />
                ) : (
                  <DarkModeIcon />
                )}
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}style={{backgroundColor: 'red'}}>
              <Divider orientation="vertical" flexItem  />
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
