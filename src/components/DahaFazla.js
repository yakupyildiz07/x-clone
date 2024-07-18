import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArticleIcon from "@mui/icons-material/Article";
import PaymentsIcon from "@mui/icons-material/Payments";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MicNoneIcon from "@mui/icons-material/MicNone";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, IconButton } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export default function DahaFazla() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isSmallScreen = useMediaQuery("(max-width:1294px)");
  return (
    <div>
      {isSmallScreen ? (
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreHorizIcon fontSize="large"/>
        </IconButton>
      ) : (
        <Button
          size=""
          startIcon={
            <MoreHorizIcon fontSize="large" sx={{ paddingRight: 1 }} />
          }
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Daha Fazla
        </Button>
      )}

      <Menu
        sx={{
          top: "-235px",
          "& .MuiMenu-paper": {
            border: "1px solid rgb(47, 51, 54)",
            borderRadius: "12px",
            boxShadow:
              "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px;",
          },
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          disablePadding: true,
        }}
      >
        <MenuItem
          sx={{
            height: "56px",
            width: "318px",
            backgroundColor: "black",
            color: "rgb(231, 233, 234)",
            fontSize: "20px",
            fontWeight: "700",
            "&:hover": { backgroundColor: "rgb(22,24,28)" },
            gap: 3,
          }}
        >
          <ArticleIcon /> Listeler
        </MenuItem>
        <MenuItem
          sx={{
            height: "56px",
            width: "318px",
            backgroundColor: "black",
            color: "rgb(231, 233, 234)",
            fontSize: "20px",
            fontWeight: "700",
            "&:hover": { backgroundColor: "rgb(22,24,28)" },
            gap: 3,
          }}
        >
          <PaymentsIcon /> Para Kazanma
        </MenuItem>
        <MenuItem
          sx={{
            height: "56px",
            width: "318px",
            backgroundColor: "black",
            color: "rgb(231, 233, 234)",
            fontSize: "20px",
            fontWeight: "700",
            "&:hover": { backgroundColor: "rgb(22,24,28)" },
            gap: 3,
          }}
        >
          <ArrowOutwardIcon />
          Reklamlar
        </MenuItem>
        <MenuItem
          sx={{
            height: "56px",
            width: "318px",
            backgroundColor: "black",
            color: "rgb(231, 233, 234)",
            fontSize: "20px",
            fontWeight: "700",
            "&:hover": { backgroundColor: "rgb(22,24,28)" },
            gap: 3,
          }}
        >
          <BusinessCenterIcon />
          İşler
          <Box
            sx={{
              ml: "auto",
              backgroundColor: "rgb(73, 22, 0)",
              color: "rgb(255, 224, 194)",
              fontSize: "13px",
              fontWeight: 700,
              borderRadius: "4px",
              px: "4px",
            }}
          >
            Beta
          </Box>
        </MenuItem>
        <MenuItem
          sx={{
            height: "56px",
            width: "318px",
            backgroundColor: "black",
            color: "rgb(231, 233, 234)",
            fontSize: "20px",
            fontWeight: "700",
            "&:hover": { backgroundColor: "rgb(22,24,28)" },
            gap: 3,
          }}
        >
          <MicNoneIcon />
          Sohbet odanı oluştur
        </MenuItem>
        <MenuItem
          sx={{
            height: "56px",
            width: "318px",
            backgroundColor: "black",
            color: "rgb(231, 233, 234)",
            fontSize: "20px",
            fontWeight: "700",
            "&:hover": { backgroundColor: "rgb(22,24,28)" },
            gap: 3,
          }}
        >
          <SettingsIcon />
          Ayarlar ve gizlilik
        </MenuItem>
      </Menu>
    </div>
  );
}
