import Sidebar from "../Home/Sidebar";
import Sidebar2 from "../Home/Sidebar2";
import Widgets from "../Home/Widgets";
import { Main5 } from "./Main5";
import { Stack } from "@mui/material";
import { useMediaQuery } from '@mui/material';

export const Saved = () => {
  const isSmallScreen = useMediaQuery('(max-width:1294px)')

  return (
    <Stack
      width="-webkit-fill-available"
      direction="row"
      justifyContent="center"
    >
      {isSmallScreen ? <Sidebar2/> : <Sidebar/>}
      <Main5 />
      <Widgets />
    </Stack>
  );
};
