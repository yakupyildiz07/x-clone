import { Stack } from "@mui/material";
import Sidebar from "../Home/Sidebar";
import { Main4 } from "./Main4";
import { useMediaQuery } from '@mui/material';
import Sidebar2 from "../Home/Sidebar2";
import SidebarBottom from "../Home/SidebarBottom";
export const Grok = () => {
  const isSmallScreen = useMediaQuery('(max-width:1294px)')
  const mobileScreen = useMediaQuery('(max-width:700px)')

  return (
    <Stack width="-webkit-fill-available" direction="row" justifyContent="center">
      {mobileScreen ? <SidebarBottom /> : (isSmallScreen ? <Sidebar2 /> : <Sidebar />)}
      <Main4 />
    </Stack>
  );
};
