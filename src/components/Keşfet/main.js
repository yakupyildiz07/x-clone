import { Box, IconButton, Stack } from "@mui/material";
import Search from "../../sub-components/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import { ExploreTabs } from "./Tabs";
import { useState } from "react";

export const Main = () => {
  return (
    <Box
      minWidth="600px"
      display="flex"
      alignItems="flex-start"
      flexDirection="column"
      p={0}
      borderRight="1px solid rgb(47, 51, 54)"
      borderLeft="1px solid rgb(47, 51, 54)"
      minHeight="100vh"
sx={{ "@media (max-width: 718px)": {minWidth:"-webkit-fill-available",}}}
    >
      <Box
        width="-webkit-fill-available"
        display="flex"
        paddingBottom="5px"
        paddingLeft="20px"
        alignItems="baseline"
      >
        <Search />
        <IconButton sx={{ marginLeft: "30px", color: "white" }}>
          <SettingsIcon />
        </IconButton>
      </Box>
      <ExploreTabs />
    </Box>
  );
};

<Box></Box>;
