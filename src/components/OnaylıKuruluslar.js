import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import Onaylı from "./onaylı";
import { IconButton } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export default function OnayliKuruluslar() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const isSmallScreen = useMediaQuery("(max-width:1294px)");
  return (
    <div>
      {isSmallScreen ? (
        <IconButton onClick={handleOpen}>
          <FlashOnIcon fontSize="large" />
        </IconButton>
      ) : (
        <Button
          size=""
          startIcon={<FlashOnIcon fontSize="large" sx={{ paddingRight: 1 }} />}
          onClick={handleOpen}
        >
          Onaylı Kuruluşlar
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ bgcolor: "rgba(91, 112, 131, 0.4)" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: 600,
            maxHeight: "100vh",
            bgcolor: "black",
            border: "2px solid #000",
            boxShadow: 24,
            borderRadius: "16px",
            "@media (max-width: 718px)": {
              minHeight: "100vh",
              minWidth: "100vw",
              textAlign: "-webkit-center",
              overflowY: "scroll",
            },
          }}
        >
          <Onaylı />
        </Box>
      </Modal>
    </div>
  );
}
