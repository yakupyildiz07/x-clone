import { Stack } from "@mui/material";
import Sidebar from "../Home/Sidebar";
import { Main4 } from "./Main4";
import { useMediaQuery } from '@mui/material';
import Sidebar2 from "../Home/Sidebar2";
export const Grok = () => {
  const isSmallScreen = useMediaQuery('(max-width:1294px)')

  return (
    <Stack width="-webkit-fill-available" direction="row" justifyContent="center">
      {isSmallScreen ? <Sidebar2/> : <Sidebar/>}
      <Main4 />
    </Stack>
  );
};
