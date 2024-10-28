import {
  Stack,
  Avatar,
  TextField,
  IconButton,
  Button,
  Grid,
  Box,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import { useEffect, useState } from "react";
const Post = () => {
  const [button, setbutton] = useState("none");
  const [clas, setclas] = useState("");
  

  const [isTextFieldVisible, setIsTextFieldVisible] = useState(false);
  const handleDocumentClick = (e) => {
    if (e.target.closest("#standard-multiline-flexible") === null) {
      setbutton("none");
      setclas("")
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleButtonClick = () => {
    setIsTextFieldVisible(true);
    setbutton("flex");
    setclas("post-icons")
  };
  return (
    <Box width="100%" boxSizing="border-box">
      
      <Stack
        className="post-main"
        direction="row"
        width="-webkit-fill-available"
        border=""
        paddingX="16px"
      >
        <Avatar
          alt="Remy Sharp"
          src="https://pbs.twimg.com/profile_images/1800433408708907008/Px7QWUJU_400x400.jpg"
          sx={{ margin: "12px 8px 0 0" }}
        />
        <Stack width="inherit">
          <TextField
            onClick={handleButtonClick}
            id="standard-multiline-flexible"
            fullWidth
            multiline
            maxRows={5}
            variant="standard"
            placeholder="Neler oluyor?"
            className="text"
            sx={{
              "& .css-10lvcmn-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before":
                { borderBottom: "none" },
              "& .MuiInput-underline::before": { border: "none" },
              "& .MuiInput-underline::after": { border: "none" },
              paddingY: "12px",
            }}
          />
          <Button
            className="button-in-text"
            sx={{ display: `${button}!important`, fontWeight: "700" }}
            size="small"
            startIcon={
              <PublicIcon fontSize="medium" sx={{ paddingRight: "1px" }} />
            }
          >
            Herkes yanıtlayabilir
          </Button>
          <Stack direction="row" className= {clas}>
            <IconButton size="small" color="primary">
              <ImageIcon fontSize="medium" />
            </IconButton>
            <IconButton size="small" color="primary">
              <GifBoxIcon fontSize="medium" />
            </IconButton>
            <IconButton size="small" color="primary">
              <ChecklistIcon fontSize="medium" />
            </IconButton>
            <IconButton size="small" color="primary">
              <SentimentSatisfiedAltIcon fontSize="medium" />
            </IconButton>
            <IconButton size="small" color="primary">
              <EventIcon fontSize="medium" />
            </IconButton>
            <IconButton size="small" color="primary">
              <LocationOnIcon fontSize="medium" />
            </IconButton>
            <Button
              variant="contained"
              size="small"
              sx={{
                width: "86px",
                borderRadius: 30,
                fontWeight: 700,
                textTransform: "capitalize",
                marginLeft: "auto",
                fontSize: "inherit",
                height: 36,
                color: "white !important",
                bgcolor: "rgb(29, 155, 240) !important",
              }}
            >
              Gönder
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
export default Post;
