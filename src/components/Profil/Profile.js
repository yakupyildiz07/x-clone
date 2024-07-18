import { Stack } from "@mui/material";
import Sidebar from "../Home/Sidebar";
import Widgets from "../Home/Widgets";
import { Main7 } from "./Main7";
import { useMediaQuery } from '@mui/material';
import Sidebar2 from "../Home/Sidebar2";

export const Profile = () => {
  const isSmallScreen = useMediaQuery('(max-width:1294px)')

    return (
        <Stack width="-webkit-fill-available" direction="row" justifyContent="center">
          {isSmallScreen ? <Sidebar2/> : <Sidebar/>}
          <Main7 />
          <Widgets/>
        </Stack>
      );
};
