import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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

const Sidebar = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="282.5px"
      border="none"
      gap={4}
      paddingLeft="0"
      sx={{ minHeight: "100vh" }}
      position="relative"
      left={0}
      top={0}
      bottom={0}
      boxSizing="border-box"
      alignItems="flex-end"
    >
      <Stack
        position="fixed"
        className="ButtonGroup"
        orientation="vertical"
        variant="text"
        aria-label="Basic button group"
        color="primary"
        width="270px"
        marginBottom={2}
        zIndex="2"
        gap="1px"
      >
        <Link to="/">
          <IconButton disableRipple>
            <XIcon fontSize="large" sx={{ color: "rgb(231, 233, 234)" }} />
          </IconButton>
        </Link>
        <Link to="/">
          <Button
            size=""
            startIcon={
              <HomeIcon
                fontSize="large"
                shapeRendering="50px"
                sx={{ paddingRight: 1 }}
              />
            }
          >
            Anasayfa
          </Button>
        </Link>
        <Link to="/explore">
          <Button
            size=""
            startIcon={<SearchIcon fontSize="large" sx={{ paddingRight: 1 }} />}
          >
            Keşfet
          </Button>
        </Link>
        <Link to="/notifications">
          <Button
            size=""
            startIcon={
              <NotificationsNoneIcon fontSize="large" sx={{ paddingRight: 1 }} />
            }
          >
            Bildirimler
          </Button>
        </Link>
        <Link to="/messages">
          <Button
            size=""
            startIcon={
              <MailOutlineIcon fontSize="large" sx={{ paddingRight: 1 }} />
            }
          >
            Mesajlar
          </Button>
        </Link>
        <Link to="/grok">
          <Button
            size=""
            startIcon={
              <CropSquareIcon fontSize="large" sx={{ paddingRight: 1 }} />
            }
          >
            Grok
          </Button>
        </Link>
        <Link to="/bookmarks">
          <Button
            size=""
            startIcon={
              <BookmarkBorderIcon fontSize="large" sx={{ paddingRight: 1 }} />
            }
          >
            Yer İşaretleri
          </Button>
        </Link>
        <Link to="/communities">
          <Button
            size=""
            startIcon={
              <SupervisorAccountIcon
                fontSize="large"
                sx={{ paddingRight: 1 }}
              />
            }
          >
            Topluluklar
          </Button>
        </Link>
        <Link to="/premium">
          <Button
            size=""
            startIcon={<XIcon fontSize="large" sx={{ paddingRight: 1 }} />}
          >
            Premium
          </Button>
        </Link>
        <OnayliKuruluslar />
        <Link to="/profile">
          <Button
            size=""
            startIcon={<PersonIcon fontSize="large" sx={{ paddingRight: 1 }} />}
          >
            Profil
          </Button>
        </Link>

        <DahaFazla />
      </Stack>
      <Stack
        position="fixed"
        orientation="vertical"
        variant="text"
        aria-label="Basic button group"
        color="primary"
        fullWidth
        spacing={2}
        zIndex="1"
      >
        <Link to="/">
          <Button
            variant="contained"
            size="large"
            sx={{
              p: "0 32px",
              backgroundColor: "rgb(29, 155, 240)",
              borderRadius: 30,
              fontWeight: 700,
              textTransform: "capitalize",
              marginLeft: 2,
              fontSize: 17,
              height: 52,
              width: "233px",
              mt: "720px",
              mr: "37px",
              ":hover": { backgroundColor: "rgb(26,140,216) !important" },
            }}
          >
            Gönder
          </Button>
        </Link>
      </Stack>
      <ProfileButton />
    </Box>
  );
};
export default Sidebar;
