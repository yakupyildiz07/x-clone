import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import { ExpTrends } from "./ExpTrends";
import { ExpTrends2 } from "./ExpTrends2";
import { ExpTrends3 } from "./ExpTrends3";

export const ExploreTabs = () => {
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", bgcolor: "black", overflow: "hidden" }}
      boxSizing="border-box"
    >
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          // centered
          sx={{
            borderBottom: '1px solid rgb(47,51,54)', }}
        >
          <Tab
            value="0"
            sx={{
              padding: "16px",
              color: value === "0" ? "white !important" : "rgb(113, 118, 123)",
              fontWeight: value === "0" ? "700":"500",
              textTransform: "capitalize",
              marginX: "10px",
            }}
            label="Sana özel"
          />
          <Tab
            value="1"
            sx={{
              padding: "16px",
              color: value === "1" ? "white !important" : "rgb(113, 118, 123)",
              fontWeight: value === "1" ? "700":"500",
              textTransform: "capitalize",
              marginX: "10px",
            }}
            label="Gündemdekiler"
          />
          <Tab
            value="2"
            sx={{
              padding: "16px",
              color: value === "2" ? "white !important" : "rgb(113, 118, 123)",
              fontWeight: value === "2" ? "700":"500",
              textTransform: "capitalize",
              marginX: "10px",
            }}
            label="Haberler"
          />
          <Tab
            value="3"
            sx={{
              padding: "16px",
              color: value === "3" ? "white !important" : "rgb(113, 118, 123)",
              fontWeight: value === "3" ? "700":"500",
              textTransform: "capitalize",
              marginX: "10px",
            }}
            label="Spor"
          />
          <Tab
            value="4"
            sx={{
              padding: "16px",
              color: value === "4" ? "white !important" : "rgb(113, 118, 123)",
              fontWeight: value === "4" ? "700":"500",
              textTransform: "capitalize",
              marginX: "10px",
            }}
            label="Eğlence"
          />
        </TabList>
        <TabPanel value="0" sx={{ p: 0 }}><ExpTrends/></TabPanel>
        <TabPanel value="1" sx={{ p: 0 }}><ExpTrends2/></TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}><ExpTrends3/></TabPanel>
        <TabPanel value="3" sx={{ p: 0 }}><ExpTrends/></TabPanel>
        <TabPanel value="4" sx={{ p: 0 }}><ExpTrends3/></TabPanel>
      </TabContext>
    </Box>
  );
};
