import { Stack } from "@mui/material";
import { Whotofollow } from "../../sub-components/Whotofollow";
import Sidebar from "../Home/Sidebar";
import { Main } from "./main";
import { useMediaQuery } from '@mui/material';
import Sidebar2 from "../Home/Sidebar2";

export const Explore = () => {
  const isSmallScreen = useMediaQuery('(max-width:1294px)')

  return (
    <Stack width="-webkit-fill-available" direction="row" justifyContent="center">
      {isSmallScreen ? <Sidebar2/> : <Sidebar/>}
      <Main />
      <Stack 
      marginLeft="30px"
      width="350px"
      py="12px"
      mr="10px"
      sx={{
        '@media (min-width: 1108px)': {width:"350px"},
        '@media (min-width: 1018px)': {width:"290px"},
        '@media (max-width: 1017px)': {display:"none"},
      }}
      >
      <Whotofollow />
      </Stack>
    </Stack>
  );
};
