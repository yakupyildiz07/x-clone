import { Grid, Button, Stack, Avatar, IconButton, Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import XIcon from "@mui/icons-material/X";

export const ForYou = ({ setShowIndexPage, setShowPosts }) => {
  const [classname, setclassname] = useState("");
  const handleClick = () => {
    setclassname("subgrid2");
    setclassname1("");
    setShowPosts(false);
    setShowIndexPage(true);
  };

  const [classname1, setclassname1] = useState("subgrid2");
  const handleClick1 = () => {
    setclassname("");
    setclassname1("subgrid2");
    setShowIndexPage(false);
    setShowPosts(true);
  };
  const mobileScreen = useMediaQuery('(max-width:700px)')
  return (
    <Grid
      position="sticky"
      top={0}
      zIndex={3}
      className="grid"
      container
      spacing={2}
      textAlign="center"
      width="100%"
      m={0}
      overflow="inherit"
      direction="column"
    > {mobileScreen?
      <Stack direction="row" justifyContent="space-between" alignItems="center" px={2}>
        <Link to="/profile">
        <Avatar
          
          alt="Remy Sharp"
          src="https://pbs.twimg.com/profile_images/1800433408708907008/Px7QWUJU_400x400.jpg"
          sx={{ margin: "0 8px 0 0" ,width:"32px",height:"32px" }}
        />
        </Link>
        <Link to="/">
          <IconButton disableRipple disableFocusRipple disableTouchRipple sx={{":hover":{backgroundColor:"transparent !important"}}} >
            <XIcon fontSize="large" sx={{ color: "rgb(231, 233, 234)", ml:"70px" ,}} />
          </IconButton>
        </Link>
        <Box
          sx={{
            backgroundImage:"linear-gradient(90.38deg, rgb(103, 57, 198) 0.23%, rgb(64, 64, 191) 32.73%, rgb(71, 61, 192) 50.37%, rgb(30, 61, 161) 98.27%)",
            color: "white",
            fontSize: "15px",
            fontWeight: 700,
            borderRadius: "9999px",
            px: "16px",
            lineHeight:"20px",
            minHeight:"24px"
          }}
        >
          %50 indirim
        </Box>
      </Stack>:""}
      <Stack direction="row">
      <Grid item xs className="subgrid">
        <Button className={classname1} onClick={handleClick1} fullWidth>
          Sana özel
        </Button>
      </Grid>
      <Grid item xs className="subgrid">
        <Button className={classname} onClick={handleClick} fullWidth>
          Takip Edilenler
        </Button>
      </Grid>
      </Stack>
    </Grid>
  );
};
