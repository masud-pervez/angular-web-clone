import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import resourcesDB from "../../components/database/resources_DB";

export default function index() {
  const [value, setValue] = useState("development");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container justifyContent="center">
      <Grid
        item
        style={{
          backgroundColor: "#1e88e5",
          marginTop: "60px",
          width: "100%",
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
      </Grid>

      <Grid
        item
        xs={10}
        lg={7 }
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "25px",
        }}
      >
        <Box
          sx={{ width: "auto", typography: "body1", justifyContent: "center"}}
        >
          <TabContext value={value}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                centered
                sx={{border:"none"}}
              >
                <Tab label="DEVELOPMENT" value="development" />
                <Tab label="EDUCATION" value="education" />
                <Tab label="COMMUNITY" value="community" />
              </TabList>
            </Box>

            {resourcesDB.map((resitm) => {
              const { id, category, resourceitems } = resitm;
              return (
                <TabPanel value={category} key={id}>
                  <Card sx={{ maxWidth: "100%" }}>
                    {resourceitems.map((resource, idx) => {
                      const { itemTitle, items } = resource;
                      console.log(itemTitle);
                      return (
                        <Box key={idx}>
                          <CardHeader
                            title={itemTitle}
                            sx={{ backgroundColor: "#eceff1" }}
                          />
                          {items.map((item, idx) => {
                            const { itemDetails, itemHeading } = item;

                            return (
                              <CardContent
                                key={idx}
                                sx={{
                                  ":hover": {
                                    boxShadow:
                                      "-6px 5px 20px 0px rgba(55,154,224,0.75)",
                                  },
                                  transition: "all 0.3s",
                                  marginBottom: "10px"
                                }}
                              >
                                <Typography variant="h6" color="text.dark" sx={{fontWeight: "bold"}}>
                                  {itemHeading}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {itemDetails}
                                </Typography>
                              </CardContent>
                            );
                          })}
                        </Box>
                      );
                    })}
                  </Card>
                </TabPanel>
              );
            })}
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );
}
