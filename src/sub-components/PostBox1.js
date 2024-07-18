import { useState } from "react";
import {
  Box,
  Stack,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import {
  MoreHoriz as MoreHorizIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Cached as CachedIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Equalizer as EqualizerIcon,
  BookmarkBorder as BookmarkBorderIcon,
  IosShare as IosShareIcon,
} from "@mui/icons-material";

const PostBox1 = () => {
  const [coment, setComent] = useState(2);
  const [rt, setRt] = useState(5);
  const [like, setLike] = useState(10);
  const [clr, setClr] = useState("rgb(113, 118, 123) !important");
  const [bgclr, setBgclr] = useState("transparent");
  const [rtClr, setRtClr] = useState("rgb(113, 118, 123) !important");
  const [rtBgclr, setRtBgclr] = useState("transparent");
  const [likeClr, setLikeClr] = useState("rgb(113, 118, 123) !important");
  const [likeBgclr, setLikeBgclr] = useState("transparent");

  const handleClick = (e) => {
    const { testid } = e.target.dataset;

    if (testid === "ChatBubbleOutlineIcon") {
      if (coment === 2) {
        setComent(3);
        setClr("rgb(29, 155, 240) !important");
        setBgclr("rgb(1, 30, 50) !important");
      } else {
        setComent(2);
        setClr("rgb(113,118,123) !important");
        setBgclr("transparent");
      }
    } else if (testid === "CachedIcon") {
      if (rt === 5) {
        setRt(6);
        setRtClr("rgb(0, 186, 124) !important");
        setRtBgclr("rgb(1, 50, 1) !important");
      } else {
        setRt(5);
        setRtClr("rgb(113, 118, 123) !important");
        setRtBgclr("transparent");
      }
    } else if (testid === "FavoriteBorderIcon") {
      if (like === 10) {
        setLike(11);
        setLikeClr("rgb(249, 24, 128) !important");
        setLikeBgclr("rgb(51, 0, 30) !important");
      } else {
        setLike(10);
        setLikeClr("rgb(113,118,123) !important");
        setLikeBgclr("transparent");
      }
    }
  };

  return (
    <Box
      width="100%"
      boxSizing="border-box"
      display="flex"
      paddingX="16px"
      borderBottom="1px solid rgb(47, 51, 54)"
      marginTop="12px"
    >
      <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1800433408708907008/Px7QWUJU_400x400.jpg" sx={{ margin: "0 8px 0 0" }} />
      <Card sx={{ minWidth: "auto", bgcolor: "black", mb: "1px" }}>
        <CardHeader
          disableTypography
          action={
            <IconButton aria-label="settings" sx={{ fontSize: "revert" }}>
              <MoreHorizIcon sx={{ marginX: "8px" }} />
            </IconButton>
          }
          title="Yakup"
          subheader="  @yakupyildiz0 20 Tem 2024"
          sx={{
            display: "flex",
            color: "rgb(231, 233, 234)",
            padding: 0,
            alignItems: "baseline",
          }}
        />
        <CardContent sx={{ padding: 0 }}>
          <Typography variant="body2" color="rgb(231, 233, 234)">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga qui
            corporis minima ipsam odio facilis ab id laborum omnis officiis,
            veniam dolor officia suscipit eius quia ea nulla reprehenderit
            blanditiis!
          </Typography>
        </CardContent>
        <CardActions disableSpacing className="card-icons">
          <Stack direction="row" spacing={10} alignItems="center">
            <IconButton
              aria-label="comment"
              sx={{ fontSize: "revert", color: clr, backgroundColor: bgclr }}
              onClick={handleClick}
              data-testid="ChatBubbleOutlineIcon"
              className="comment"
            >
              <ChatBubbleOutlineIcon fontSize="small" />
            </IconButton>
            <p>{coment}</p>
            <IconButton
            className="retweet"
              aria-label="retweet"
              sx={{
                fontSize: "revert",
                color: rtClr,
                backgroundColor: rtBgclr,
              }}
              onClick={handleClick}
              data-testid="CachedIcon"
            >
              <CachedIcon fontSize="small" />
            </IconButton>
            <p>{rt}</p>
            <IconButton
              className="like"
              aria-label="like"
              sx={{
                fontSize: "revert",
                color: likeClr,
                backgroundColor: likeBgclr,
              }}
              onClick={handleClick}
              data-testid="FavoriteBorderIcon"
            >
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
            <p>{like}</p>
            <IconButton aria-label="share" sx={{ fontSize: "revert",":hover":{backgroundColor:"rgb(1,30,50)",color:"rgb(29,155,240) !important"}}} >
              <EqualizerIcon fontSize="small" />
            </IconButton>
          </Stack>
          <Stack marginLeft="auto" direction="row">
            <IconButton aria-label="share" sx={{ fontSize: "revert",":hover":{backgroundColor:"rgb(1,30,50)",color:"rgb(29, 155, 240) !important"}}}>
              <BookmarkBorderIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="share" sx={{ fontSize: "revert",":hover":{backgroundColor:"rgb(1,30,50)",color:"rgb(29, 155, 240) !important" }}}>
              <IosShareIcon fontSize="small" />
            </IconButton>
          </Stack>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PostBox1;
