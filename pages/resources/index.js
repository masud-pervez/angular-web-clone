import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function index() {
  const [value, setValue] = useState("development");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          EXPLORE ANGULAR RESOURCES
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "25px",
        }}
      >
        <Box sx={{ width: "50%", typography: "body1" , justifyContent: "center" }}>
          <TabContext value={value} >
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{ display: "flex" , justifyContent: "space-around"}}
              >
                <Tab label="DEVELOPMENT" value="development" />
                <Tab label="EDUCATION" value="education" />
                <Tab label="COMMUNITY" value="community" />
              </TabList>
            </Box>

            <TabPanel value="development">Item One</TabPanel>
            <TabPanel value="education">Item Two</TabPanel>
            <TabPanel value="community">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
