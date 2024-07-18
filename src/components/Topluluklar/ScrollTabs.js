import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import PostBox from "../../sub-components/PostBox";
import PostBox1 from "../../sub-components/PostBox1";


export const ScrollTabs = () => {
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
        indi
        value={value}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
          onChange={handleChange}
          centered
          sx={{
          "& .MuiTabs-flexContainer":{alignItems:"center",mt:"8px"},"& .MuiTabs-indicator":{display:"none"}}}
        >
          <Tab
          
            value="0"
            sx={{
              border: "1px solid rgb(51,54,57)",
              backgroundColor: value=== "0" ? "rgb(29, 155, 240)":"black",
              borderRadius: "9999px",
              color: "rgb(231, 233, 234) !important",
              m:"2px",
              minHeight:"32px",
              maxHeight:"32px",
              minWidth:"auto",
              padding: " 0 16px",

              fontSize:"15px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            label="Spor"
          />
          <Tab
            value="1"
            sx={{
              border: "1px solid rgb(51,54,57)",
              backgroundColor: value=== "1" ? "rgb(29, 155, 240)":"black",
              borderRadius: "9999px",
              color: "rgb(231, 233, 234) !important",
              m:"2px",
              minHeight:"32px",
              maxHeight:"32px",
              minWidth:"auto",
              padding: " 0 16px",

              fontSize:"15px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            label="Teknoloji"
          />
          <Tab
            value="2"
            sx={{
              border: "1px solid rgb(51,54,57)",
              backgroundColor: value=== "2" ? "rgb(29, 155, 240)":"black",
              borderRadius: "9999px",
              color: "rgb(231, 233, 234) !important",
              m:"2px",
              minHeight:"32px",
              maxHeight:"32px",
              minWidth:"auto",
              padding: " 0 16px",

              fontSize:"15px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            label="Sanat"
          />
          <Tab
            value="3"
            sx={{
              border: "1px solid rgb(51,54,57)",
              backgroundColor: value=== "3" ? "rgb(29, 155, 240)":"black",
              borderRadius: "9999px",
              color: "rgb(231, 233, 234) !important",
              m:"2px",
              minHeight:"32px",
              maxHeight:"32px",
              minWidth:"auto",
              padding: " 0 16px",

              fontSize:"15px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            label="Eğlence"
          />
          <Tab
            value="4"
            sx={{
              border: "1px solid rgb(51,54,57)",
              backgroundColor: value=== "4" ? "rgb(29, 155, 240)":"black",
              borderRadius: "9999px",
              color: "rgb(231, 233, 234) !important",
              m:"2px",
              minHeight:"32px",
              maxHeight:"32px",
              minWidth:"auto",
              padding: " 0 16px",

              fontSize:"15px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            label="Oyun"
          />
                    <Tab
            value="5"
            sx={{
              border: "1px solid rgb(51,54,57)",
              backgroundColor: value=== "5" ? "rgb(29, 155, 240)":"black",
              borderRadius: "9999px",
              color: "rgb(231, 233, 234) !important",
              m:"2px",
              minHeight:"32px",
              maxHeight:"32px",
              minWidth:"auto",
              padding: " 0 16px",

              fontSize:"15px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            label="Siyaset"
          />
          <Tab
            value="6"
            sx={{
              border: "1px solid rgb(51,54,57)",
              backgroundColor: value=== "6" ? "rgb(29, 155, 240)":"black",
              borderRadius: "9999px",
              color: "rgb(231, 233, 234) !important",
              m:"2px",
              minHeight:"32px",
              maxHeight:"32px",
              minWidth:"auto",
              padding: " 0 16px",

              fontSize:"15px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            label="İşetme"
          />
          <Tab
            value="7"
            sx={{
              border: "1px solid rgb(51,54,57)",
              backgroundColor: value=== "7" ? "rgb(29, 155, 240)":"black",
              borderRadius: "9999px",
              color: "rgb(231, 233, 234) !important",
              m:"2px",
              minHeight:"32px",
              maxHeight:"32px",
              minWidth:"auto",
              padding: " 0 16px",

              fontSize:"15px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            label="Kültür"
          />
          <Tab
            value="8"
            sx={{
              border: "1px solid rgb(51,54,57)",
              backgroundColor: value=== "8" ? "rgb(29, 155, 240)":"black",
              borderRadius: "9999px",
              color: "rgb(231, 233, 234) !important",
              m:"2px",
              minHeight:"32px",
              maxHeight:"32px",
              minWidth:"auto",
              padding: " 0 16px",

              fontSize:"15px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            label="Bilim"
          />
          <Tab
            value="9"
            sx={{
              border: "1px solid rgb(51,54,57)",
              backgroundColor: value=== "9" ? "rgb(29, 155, 240)":"black",
              borderRadius: "9999px",
              color: "rgb(231, 233, 234) !important",
              m:"2px",
              minHeight:"32px",
              maxHeight:"32px",
              minWidth:"auto",
              padding: " 0 16px",

              fontSize:"15px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            label="Yemek"
          />
                    <Tab
            value="10"
            sx={{
              border: "1px solid rgb(51,54,57)",
              backgroundColor: value=== "10" ? "rgb(29, 155, 240)":"black",
              borderRadius: "9999px",
              color: "rgb(231, 233, 234) !important",
              m:"2px",
              minHeight:"32px",
              maxHeight:"32px",
              minWidth:"auto",
              padding: " 0 16px",

              fontSize:"15px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            label="Hayvanlar"
          />
          <Tab
            value="11"
            sx={{
              border: "1px solid rgb(51,54,57)",
              backgroundColor: value=== "11" ? "rgb(29, 155, 240)":"black",
              borderRadius: "9999px",
              color: "rgb(231, 233, 234) !important",
              m:"2px",
              minHeight:"32px",
              maxHeight:"32px",
              minWidth:"auto",
              padding: " 0 16px",

              fontSize:"15px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            label="Eğitim"
          />
          <Tab
            value="12"
            sx={{
              border: "1px solid rgb(51,54,57)",
              backgroundColor: value=== "12" ? "rgb(29, 155, 240)":"black",
              borderRadius: "9999px",
              color: "rgb(231, 233, 234) !important",
              m:"2px",
              minHeight:"32px",
              maxHeight:"32px",
              minWidth:"auto",
              padding: " 0 16px",

              fontSize:"15px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            label="Moda ve güzellik"
          />
          <Tab
            value="13"
            sx={{
              border: "1px solid rgb(51,54,57)",
              backgroundColor: value=== "13" ? "rgb(29, 155, 240)":"black",
              borderRadius: "9999px",
              color: "rgb(231, 233, 234) !important",
              m:"2px",
              minHeight:"32px",
              maxHeight:"32px",
              minWidth:"auto",
              padding: " 0 16px",

              fontSize:"15px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            label="Sağlık ve Fitness"
          />
          <Tab
            value="14"
            sx={{
              border: "1px solid rgb(51,54,57)",
              backgroundColor: value=== "14" ? "rgb(29, 155, 240)":"black",
              borderRadius: "9999px",
              color: "rgb(231, 233, 234) !important",
              m:"2px",
              minHeight:"32px",
              maxHeight:"32px",
              minWidth:"auto",
              padding: " 0 16px",

              fontSize:"15px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
            label="Haberler"
          />
          
        </TabList>
        <TabPanel value="0"  sx={{ p: 0 }}><PostBox1/><PostBox/></TabPanel>
        <TabPanel value="1"  sx={{ p: 0 }}><PostBox/></TabPanel>
        <TabPanel value="2"  sx={{ p: 0 }}><PostBox1/><PostBox1/></TabPanel>
        <TabPanel value="3"  sx={{ p: 0 }}><PostBox/><PostBox1/></TabPanel>
        <TabPanel value="4"  sx={{ p: 0 }}><PostBox1/><PostBox/><PostBox1/></TabPanel>
        <TabPanel value="5"  sx={{ p: 0 }}><PostBox/><PostBox/></TabPanel>
        <TabPanel value="6"  sx={{ p: 0 }}><PostBox1/></TabPanel>
        <TabPanel value="7"  sx={{ p: 0 }}><PostBox/></TabPanel>
        <TabPanel value="8"  sx={{ p: 0 }}><PostBox1/><PostBox1/><PostBox1/></TabPanel>
        <TabPanel value="9"  sx={{ p: 0 }}><PostBox1/><PostBox1/></TabPanel>
        <TabPanel value="10" sx={{ p: 0 }}><PostBox/><PostBox1/><PostBox1/></TabPanel>
        <TabPanel value="11" sx={{ p: 0 }}><PostBox1/><PostBox1/><PostBox/></TabPanel>
        <TabPanel value="12" sx={{ p: 0 }}><PostBox/></TabPanel>
        <TabPanel value="13" sx={{ p: 0 }}><PostBox1/><PostBox/></TabPanel>
        <TabPanel value="14" sx={{ p: 0 }}><PostBox1/><PostBox1/></TabPanel>
      </TabContext>
    </Box>
  );
};
