
import { Stack } from "@mui/material";
import Sidebar from "../Home/Sidebar";
import Widgets from "../Home/Widgets";
import {Main6} from "./Main6"
import { useMediaQuery } from '@mui/material';
import Sidebar2 from "../Home/Sidebar2";
import SidebarBottom from "../Home/SidebarBottom";

export const Communities = () => {
  const isSmallScreen = useMediaQuery('(max-width:1294px)')
  const mobileScreen = useMediaQuery('(max-width:700px)')

    return (
        <Stack width="-webkit-fill-available" direction="row" justifyContent="center">
      {mobileScreen ? <SidebarBottom /> : (isSmallScreen ? <Sidebar2 /> : <Sidebar />)}
      <Main6 />
          <Widgets/>
        </Stack>
      );
};
