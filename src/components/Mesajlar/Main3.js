import { Avatar, Box, Button, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import SettingsIcon from "@mui/icons-material/Settings";
import Search from "../../sub-components/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";
export const Main3 = () => {
  const mobileScreen = useMediaQuery('(max-width:700px)')

  return (
    <Box
      width="388px"
      boxSizing="border-box"
      display="flex"
      flexDirection="column"
      border="1px solid rgb(47, 51, 54) "
      borderTop="none"
      borderBottom="none"
      sx={{"@media (max-width: 1017px)": {width:"inherit",}}}
    >
      <Box display="flex" px={2} pt={1} alignItems="center">
      {mobileScreen ?  <Link to="/profile">
      <Avatar
        
        alt="Remy Sharp"
        src="https://pbs.twimg.com/profile_images/1800433408708907008/Px7QWUJU_400x400.jpg"
        sx={{ margin: "0 20px 0 0" ,width:"32px",height:"32px" }}
      />
      </Link>:"" }
        <Typography variant="h6" fontWeight="700">
          Mesajlar
        </Typography>
        <IconButton sx={{ marginLeft: "auto", color: "white" }}>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <ForwardToInboxIcon sx={{ marginLeft: "auto", color: "white" }} />
        </IconButton>
      </Box>
      <Stack p="12px">
        <Search />
      </Stack>
      <Button sx={{justifyContent:"flex-start",p:"12px 16px",":hover":{backgroundColor:"rgb(22,24,28)"}}}>
        <IconButton sx={{border:"1px solid rgb(42, 45, 48)",backgroundColor:"black",borderRadius:"50%",color:"rgb(231, 233, 234)", mr:2}}>
          <MailOutlineIcon fontSize="large" />
        </IconButton>
        <Typography color="rgb(231,233,234)" fontSize="15px" fontWeight="400" textTransform="capitalize">Mesaj istekleri</Typography>
        
      </Button>
    </Box>
  );
};
