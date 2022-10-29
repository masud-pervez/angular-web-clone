import "../styles/globals.css";
import { useState, useMemo, createContext } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState("light");
  const ColorModeContext = createContext({ toggleColorMode: () => {} });
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Navbar ColorModeContext={ColorModeContext}/>
        <CssBaseline />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MyApp;
