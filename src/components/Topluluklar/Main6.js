import { Box, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { ScrollTabs } from "./ScrollTabs";

export const Main6 = () => {
  return (
    <Box
      width="600px"
      boxSizing="border-box"
      display="flex"
      flexDirection="column"
      border="1px solid rgb(47, 51, 54) "
      borderTop="none"
      borderBottom="none"
      sx={{"@media (max-width: 718px)": {width:"inherit",}}}
    >
      <Box
      minHeight="53px"
        overflow="inherit"
        top="0"
        px={2}
        pt="4px"
        display="flex"
        flexDirection="row"
        alignItems="center"
        position="sticky"
        sx={{ backdropFilter: "blur(12px)" }}
        zIndex={1}
        borderBottom="1px solid rgb(47,51,54)"
      >
        <IconButton
          sx={{
            minWidth: "56px",
            color: "rgb(239, 243, 244)",
            p: "0",
            justifyContent: "flex-start",
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" fontWeight="700">
          Topluluklar
        </Typography>
        <Stack ml="auto" direction="row">
        <IconButton
        sx={{
            minWidth: "36px",
            color: "rgb(239, 243, 244)",
            p: "0",
          }}>
          <SearchIcon />
        </IconButton>
        <IconButton
        sx={{
            minWidth: "36px",
            color: "rgb(239, 243, 244)",
            p: "0",
          }}>
          <GroupAddIcon />
        </IconButton>
        </Stack>
      </Box>
      <ScrollTabs/>
    </Box>
  );
};
