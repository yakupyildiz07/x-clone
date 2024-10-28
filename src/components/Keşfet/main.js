import { Avatar, Box, IconButton, useMediaQuery } from "@mui/material";
import Search from "../../sub-components/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import { ExploreTabs } from "./Tabs";
import { Link } from "react-router-dom";

export const Main = () => {
  const mobileScreen = useMediaQuery('(max-width:700px)')

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
        alignItems="center"
      > {mobileScreen ?  <Link to="/profile">
        <Avatar
          
          alt="Remy Sharp"
          src="https://pbs.twimg.com/profile_images/1800433408708907008/Px7QWUJU_400x400.jpg"
          sx={{ margin: "0 20px 0 0" ,width:"32px",height:"32px" }}
        />
        </Link>:"" }
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
