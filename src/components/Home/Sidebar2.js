import Box from "@mui/material/Box";
import { IconButton, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import XIcon from "@mui/icons-material/X";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import DahaFazla from "../DahaFazla";
import ProfileButton from "../../sub-components/ProfieButton";
import OnayliKuruluslar from "../OnaylıKuruluslar";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
const Sidebar2 = () => {
  return (
    <Stack height="100vh" width="68px" pl="68px">
    <Box
      display="flex"
      flexDirection="column"
      width="68px"
      border="none"
      paddingLeft="0"
      sx={{ minHeight: "100vh" }}
      position="relative"
      left={0}
      top={0}
      bottom={0}
      boxSizing="border-box"
      alignItems="flex-end"
      px={1}
      
    >
      <Stack
        position="fixed"
        className="ButtonGroup"
        orientation="vertical"
        variant="text"
        aria-label="Basic button group"
        color="primary"
        marginBottom={2}
        zIndex="2"
        gap="8px"
        alignItems="flex-end"
      >
        <Link to="/">
          <IconButton disableRipple>
            <XIcon fontSize="large" sx={{ color: "rgb(231, 233, 234)" }} />
          </IconButton>
        </Link>
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
        <Link to="/grok">
          <IconButton size="">
            <CropSquareIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/bookmarks">
          <IconButton size="">
            <BookmarkBorderIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/communities">
          <IconButton size="">
            <SupervisorAccountIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link to="/premium">
          <IconButton size="">
            <XIcon fontSize="large" />
          </IconButton>
        </Link>
        <OnayliKuruluslar />
        <Link to="/profile">
          <IconButton size="">
            <PersonIcon fontSize="large" />
          </IconButton>
        </Link>

        <DahaFazla />

        <Link to="/">
          <IconButton
            variant="contained"
            size=""
            sx={{
              backgroundColor: "rgb(29, 155, 240)",
              mt: "15px !important",
              ":hover": { backgroundColor: "rgb(26,140,216) !important" },
            }}
          >
            <HistoryEduIcon fontSize="large" />
          </IconButton>
        </Link>
        <ProfileButton />
      </Stack>
    </Box>
    </Stack>
  );
};
export default Sidebar2;
