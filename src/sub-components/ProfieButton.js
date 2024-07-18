import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export default function ProfileButton() {
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
        <Button
sx={{mt:"30px !important"}}
          size=""
          className="ButtonGroup2"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          
        >
          <Avatar
            alt="Remy Sharp"
            src="https://pbs.twimg.com/profile_images/1800433408708907008/Px7QWUJU_400x400.jpg"
          />
        </Button>
      ) : (
        <Button
          sx={{
            p: 0,
            height: "66px",
            width: "260px",
            position: "fixed",
            zIndex: "1",
            ml: "-275px",
            bottom: "0",
          }}
          size=""
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Box
            className="ButtonGroup2"
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="100%"
            height="44px"
            marginBottom="12px"
            padding="12px"
          >
            <Avatar
              alt="Remy Sharp"
              src="https://pbs.twimg.com/profile_images/1800433408708907008/Px7QWUJU_400x400.jpg"
            />
            <Stack display="flex">
              <Typography
                variant="button"
                textAlign="left"
                textTransform="none"
                fontSize="15px"
                fontWeight="700"
              >
                Yakup
              </Typography>
              <Typography
                variant="caption"
                color="rgb(113, 118, 123) !important"
                textTransform="none"
                fontSize="15px"
                fontWeight="400"
              >
                @yakupyildiz0
              </Typography>
            </Stack>
            <IconButton sx={{ ml: "auto", color: "white" }}>
              <MoreHorizIcon fontSize="small" />
            </IconButton>
          </Box>
        </Button>
      )}

      <Menu
        sx={{
          top: "-78px",
          "& .MuiMenu-paper": {
            border: "1px solid rgb(47, 51, 54)",
            borderRadius: "12px",
            boxShadow:
              "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px;",
          },
          "& .MuiMenu-list": { backgroundColor: "black" },
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          sx={{
            p: "12px 36px 12px 16px",
            height: "44px",
            width: "300px",
            backgroundColor: "black",
            color: "rgb(231, 233, 234)",
            fontSize: "15px",
            fontWeight: "700",
            "&:hover": { backgroundColor: "rgb(22,24,28)" },
            gap: 3,
          }}
        >
          Var olan bir hesap ekle
        </MenuItem>
        <MenuItem
          sx={{
            whiteSpace: "break-spaces",
            p: "12px 56px 12px 16px",
            height: "64px",
            width: "300px",
            backgroundColor: "black",
            color: "rgb(231, 233, 234)",
            fontSize: "15px",
            fontWeight: "700",
            "&:hover": { backgroundColor: "rgb(22,24,28)" },
            gap: 3,
          }}
        >
          @yakupyildiz0 hesabından çıkış yap
        </MenuItem>
      </Menu>
    </div>
  );
}
