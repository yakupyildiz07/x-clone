import { Box, Stack } from "@mui/material";
import Search from "../../sub-components/Search";
import { Premium } from "../../sub-components/Premium";
import { Trends } from "../../sub-components/Trends";
import { Whotofollow } from "../../sub-components/Whotofollow";

const Widgets = () => {
  return (
    <Box
      marginLeft="30px"
      mr="10px"
      // width="350px 290"
      boxSizing="border-box"
      display="flex"
      flexDirection="column"
      gap={2}
      minHeight="100vh"
      sx={{
        '@media (min-width: 1108px)': {width:"350px"},
        '@media (max-width: 1107px)': {width:"290px"},
        '@media (max-width: 1017px)': {display:"none"},
      }}
    >
      <Search />
      <Premium />
      <Trends />
      <Whotofollow />
    </Box>
  );
};
export default Widgets;
