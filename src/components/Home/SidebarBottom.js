import Box from "@mui/material/Box";
import {IconButton, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Link } from "react-router-dom";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
const SidebarBottom = () => {
  return (
    <Box display="flex" flexDirection="column" position="fixed" bottom={0} width="100%" zIndex="1">
      <Link to="/">
        <IconButton
          variant="contained"
          size=""
          sx={{
            color:"white",
            position:"fixed",
            bottom:"80px",
            right:"30px",
            backgroundColor: "rgb(29, 155, 240)",
            mt: "15px !important",
            ":hover": { backgroundColor: "rgb(26,140,216) !important" },
          }}
        >
          <HistoryEduIcon fontSize="large" />
        </IconButton>
      </Link>
      <Stack
        position="fixed"
        direction="row"
        className="ButtonGroup"
        aria-label="Basic button group"
        zIndex="2"
        bottom={0}
        backgroundColor="black"
        width="100%"
        justifyContent="space-around"
        borderTop="1px solid rgb(47, 51, 54)"
      >
        <Link to="/">
          <IconButton size="">
            <HomeIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/explore">
          <IconButton size="">
            <SearchIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/grok">
          <IconButton size="">
            <CropSquareIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/notifications">
          <IconButton size="">
            <NotificationsNoneIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/messages">
          <IconButton size="">
            <MailOutlineIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/communities">
          <IconButton size="">
            <SupervisorAccountIcon fontSize="large" />
          </IconButton>
        </Link>
      </Stack>
    </Box>
  );
};
export default SidebarBottom;
