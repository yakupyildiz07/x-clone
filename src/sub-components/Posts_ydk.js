import { useState } from "react";
import { Box, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CachedIcon from "@mui/icons-material/Cached";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
const Posts = () => {
  let [coment, setcoment] = useState(2);
  let [rt, setrt] = useState(5);
  let [like, setlike] = useState(10);
  let [clr, setclr] = useState("rgb(47, 51, 54) !important");
  let [bgclr, setbgclr] = useState("transparent");
  let [rtclr, setrtclr] = useState("rgb(47, 51, 54) !important");
  let [rtbgclr, setrtbgclr] = useState("transparent");
  let [likeclr, setlikeclr] = useState("rgb(47, 51, 54) !important");
  let [likebgclr, setlikebgclr] = useState("transparent");

  const plus = (e) => {
    console.log(e);
    if (e.target.dataset.testid === "ChatBubbleOutlineIcon" && coment === 2) {
      setcoment(coment + 1);
      setclr((clr = "rgb(29, 155, 240) !important"));
      setbgclr((bgclr = "rgb(1, 30, 50) !important"));
      console.log(bgclr);
    } else if (e.target.dataset.testid === "ChatBubbleOutlineIcon" && coment === 3) {
      setcoment(coment - 1);
      setbgclr("transparent");
      setclr("rgb(47, 51, 54) !important");
    } 
    else if (e.target.dataset.testid === "CachedIcon" && rt === 5) {
      setrt(rt + 1);
      setrtclr((rtclr = "rgb(0, 186, 124) !important"));
      setrtbgclr((rtbgclr = "rgb(1, 50, 1) !important"));
    } else if (e.target.dataset.testid === "CachedIcon" && rt === 6) {
      setrt(rt - 1);
      setrtbgclr("transparent");
      setrtclr("rgb(47, 51, 54) !important");
    } 
    else if (
      e.target.dataset.testid === "FavoriteBorderIcon" && like === 10) {
      setlike(like + 1);
      setlikeclr((likeclr = "rgb(249, 24, 128) !important"));
      setlikebgclr((likebgclr = "rgb(51, 0, 30) !important"));
    } else if (e.target.dataset.testid === "FavoriteBorderIcon" && like === 11) {
      setlike(like - 1);
      setlikebgclr("transparent");
      setlikeclr("rgb(47, 51, 54) !important");
    }
  };

  return (
    <>
      <Box
      
        width="100%"
        boxSizing="border-box"
        display="flex"
        paddingX="16px"
        borderBottom="1px solid  rgb(47, 51, 54)"
        sx={{class:"box1"}}
      >
        <Avatar alt="Remy Sharp" src="./pp.jpg" sx={{ margin: "0 8px 0 0" }} />
        <Card sx={{ minWidth: "auto", bgcolor: "black", mb: "1px" }}>
          <CardHeader
            disableTypography
            action={
              <IconButton
                aria-label="settings"
                className="comment"
                sx={{ fontSize: "revert" }}
              >
                <MoreHorizIcon sx={{ marginX: "8px" }} />
              </IconButton>
            }
            title="Yakup"
            subheader="  @yakupyildiz0 20 Tem 2024"
            subheaderTypographyProps={{
              color: "rgb(113, 118, 123) !important",
            }}
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
          <CardMedia
            component="img"
            height="outo"
            image="https://picsum.photos/200.jpg"
            alt="crypto"
            sx={{ borderRadius: "16px", marginTop: "12px" }}
          />

          <CardActions disableSpacing className="card-icons">
            <Stack direction="row" spacing={10} alignItems="center">
              <IconButton
                aria-label="comment"
                className="comment"
                sx={{
                  fontSize: "revert",
                  color: `${clr}`,
                  backgroundColor: `${bgclr}`,
                }}
                onClick={plus}
              >
                <ChatBubbleOutlineIcon fontSize="small" />
              </IconButton>
              <p>{coment}</p>
              <IconButton
                aria-label="retweet"
                className="retweet"
                sx={{
                  fontSize: "revert",
                  color: `${rtclr}`,
                  backgroundColor: `${rtbgclr}`,
                }}
                onClick={plus}
              >
                <CachedIcon fontSize="small" />
              </IconButton>
              <p>{rt}</p>
              <IconButton
                aria-label="like"
                className="like"
                sx={{
                  fontSize: "revert",
                  color: `${likeclr}`,
                  backgroundColor: `${likebgclr}`,
                }}
                onClick={plus}
              >
                <FavoriteBorderIcon fontSize="small" />
              </IconButton>
              <p>{like}</p>
              <IconButton
                aria-label="share"
                className="comment"
                sx={{ fontSize: "revert" }}
              >
                <EqualizerIcon fontSize="small" />
              </IconButton>
            </Stack>
            <Stack marginLeft="auto" direction="row">
              <IconButton
                aria-label="share"
                className="comment"
                sx={{ fontSize: "revert" }}
              >
                <BookmarkBorderIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="share"
                className="comment"
                sx={{ fontSize: "revert" }}
              >
                <IosShareIcon fontSize="small" />
              </IconButton>
            </Stack>
          </CardActions>
        </Card>
      </Box>
      <Box
        width="100%"
        boxSizing="border-box"
        display="flex"
        paddingX="16px"
        borderBottom="1px solid  rgb(47, 51, 54)"
        sx={{class:"box2"}}
      >
        <Avatar alt="Remy Sharp" src="./pp.jpg" sx={{ margin: "0 8px 0 0" }} />
        <Card sx={{ minWidth: "auto", bgcolor: "black", mb: "1px" }}>
          <CardHeader
            disableTypography
            action={
              <IconButton
                aria-label="settings"
                className="comment"
                sx={{ fontSize: "revert" }}
              >
                <MoreHorizIcon sx={{ marginX: "8px" }} />
              </IconButton>
            }
            title="Yakup"
            subheader="  @yakupyildiz0 20 Tem 2024"
            subheaderTypographyProps={{
              color: "rgb(113, 118, 123) !important",
            }}
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
          <CardMedia
            component="img"
            height="outo"
            image="https://picsum.photos/200.jpg"
            alt="crypto"
            sx={{ borderRadius: "16px", marginTop: "12px" }}
          />

          <CardActions disableSpacing className="card-icons">
            <Stack direction="row" spacing={10} alignItems="center">
              <IconButton
                aria-label="comment"
                className="comment"
                sx={{
                  fontSize: "revert",
                  color: `${clr}`,
                  backgroundColor: `${bgclr}`,
                }}
                onClick={plus}
              >
                <ChatBubbleOutlineIcon fontSize="small" />
              </IconButton>
              <p>{coment}</p>
              <IconButton
                aria-label="retweet"
                className="retweet"
                sx={{
                  fontSize: "revert",
                  color: `${rtclr}`,
                  backgroundColor: `${rtbgclr}`,
                }}
                onClick={plus}
              >
                <CachedIcon fontSize="small" />
              </IconButton>
              <p>{rt}</p>
              <IconButton
                aria-label="like"
                className="like"
                sx={{
                  fontSize: "revert",
                  color: `${likeclr}`,
                  backgroundColor: `${likebgclr}`,
                }}
                onClick={plus}
              >
                <FavoriteBorderIcon fontSize="small" />
              </IconButton>
              <p>{like}</p>
              <IconButton
                aria-label="share"
                className="comment"
                sx={{ fontSize: "revert" }}
              >
                <EqualizerIcon fontSize="small" />
              </IconButton>
            </Stack>
            <Stack marginLeft="auto" direction="row">
              <IconButton
                aria-label="share"
                className="comment"
                sx={{ fontSize: "revert" }}
              >
                <BookmarkBorderIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="share"
                className="comment"
                sx={{ fontSize: "revert" }}
              >
                <IosShareIcon fontSize="small" />
              </IconButton>
            </Stack>
          </CardActions>
        </Card>
      </Box>
      <Box
        width="100%"
        boxSizing="border-box"
        display="flex"
        paddingX="16px"
        borderBottom="1px solid  rgb(47, 51, 54)"
        sx={{class:"box3"}}
      >
        <Avatar alt="Remy Sharp" src="./pp.jpg" sx={{ margin: "0 8px 0 0" }} />
        <Card sx={{ minWidth: "auto", bgcolor: "black", mb: "1px" }}>
          <CardHeader
            disableTypography
            action={
              <IconButton
                aria-label="settings"
                className="comment"
                sx={{ fontSize: "revert" }}
              >
                <MoreHorizIcon sx={{ marginX: "8px" }} />
              </IconButton>
            }
            title="Yakup"
            subheader="  @yakupyildiz0 20 Tem 2024"
            subheaderTypographyProps={{
              color: "rgb(113, 118, 123) !important",
            }}
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
          <CardMedia
            component="img"
            height="outo"
            image="https://picsum.photos/200.jpg"
            alt="crypto"
            sx={{ borderRadius: "16px", marginTop: "12px" }}
          />

          <CardActions disableSpacing className="card-icons">
            <Stack direction="row" spacing={10} alignItems="center">
              <IconButton
                aria-label="comment"
                className="comment"
                sx={{
                  fontSize: "revert",
                  color: `${clr}`,
                  backgroundColor: `${bgclr}`,
                }}
                onClick={plus}
              >
                <ChatBubbleOutlineIcon fontSize="small" />
              </IconButton>
              <p>{coment}</p>
              <IconButton
                aria-label="retweet"
                className="retweet"
                sx={{
                  fontSize: "revert",
                  color: `${rtclr}`,
                  backgroundColor: `${rtbgclr}`,
                }}
                onClick={plus}
              >
                <CachedIcon fontSize="small" />
              </IconButton>
              <p>{rt}</p>
              <IconButton
                aria-label="like"
                className="like"
                sx={{
                  fontSize: "revert",
                  color: `${likeclr}`,
                  backgroundColor: `${likebgclr}`,
                }}
                onClick={plus}
              >
                <FavoriteBorderIcon fontSize="small" />
              </IconButton>
              <p>{like}</p>
              <IconButton
                aria-label="share"
                className="comment"
                sx={{ fontSize: "revert" }}
              >
                <EqualizerIcon fontSize="small" />
              </IconButton>
            </Stack>
            <Stack marginLeft="auto" direction="row">
              <IconButton
                aria-label="share"
                className="comment"
                sx={{ fontSize: "revert" }}
              >
                <BookmarkBorderIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="share"
                className="comment"
                sx={{ fontSize: "revert" }}
              >
                <IosShareIcon fontSize="small" />
              </IconButton>
            </Stack>
          </CardActions>
        </Card>
      </Box>

    </>
  );
};
export default Posts;
