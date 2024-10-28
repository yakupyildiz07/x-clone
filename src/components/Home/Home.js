import { Box, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Sidebar2 from "./Sidebar2";
import SidebarBottom from "./SidebarBottom"
import { useMediaQuery } from '@mui/material';

export const Home = () => {
  const isSmallScreen = useMediaQuery('(max-width:1294px)')
  const mobileScreen = useMediaQuery('(max-width:700px)')

  return (
    <Stack width="-webkit-fill-available" direction="row" justifyContent="center" 
    //  sx={{        "@media (max-width: 663px)": {position:"fixed",}}}
     >
      {mobileScreen ? <SidebarBottom /> : (isSmallScreen ? <Sidebar2 /> : <Sidebar />)}

      {/* {isSmallScreen ? <Sidebar2/> : <Sidebar/>} */}
      
      <Feed />
      <Widgets />
    </Stack>
  );
};
