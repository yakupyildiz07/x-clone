import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { ForYou } from "../../sub-components/ForYou";
import Post from "../../sub-components/Post";
import Posts from "../../sub-components/Posts";
import { IndexPage } from "../../sub-components/Tweet";
const Feed = () => {
  const [showIndexPage, setShowIndexPage] = useState(false);
  const [showPosts, setShowPosts] = useState(true);
  const mobileScreen = useMediaQuery('(max-width:700px)')

  return (
    <Box
      width={600}
      boxSizing="border-box"
      display="flex"
      alignItems="flex-start"
      flexDirection="column"
      p={0}
      sx={{
        // transform:'translateX(88px)',
        borderRight: "1px solid rgb(47, 51, 54)",
        borderLeft: "1px solid rgb(47, 51, 54)",
        minHeight: "100vh",
        "@media (max-width: 718px)": {width:"inherit",}
      }}
    >
      <ForYou setShowIndexPage={setShowIndexPage} setShowPosts={setShowPosts} />
      {mobileScreen ? "":<Post />}
      
      {showPosts && <Posts />}
      {showIndexPage && <IndexPage />}
    </Box>
  );
};
export default Feed;
