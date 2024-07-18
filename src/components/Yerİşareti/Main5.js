import {
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Search from "../../sub-components/Search";
export const Main5 = () => {
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
      <Box display="flex" px={2} alignItems="center" height="53px" justifyContent="space-between" >
        <Stack>
          <Typography
            display="block"
            marginBottom={0}
            color="white !important"
            fontSize="20px"
            fontWeight="700"
          >
            Yer İşaretleri
          </Typography>
          <Typography
            display="block"
            marginBottom={0}
            color="rgb(113, 118, 123) !important"
            fontWeight="400"
            fontSize="13px"
          >
            @yakupyildiz0
          </Typography>
        </Stack>
        <IconButton
          sx={{
            color: "rgb(239, 243, 244) !important",
          }}
        >
          <MoreHorizIcon />
        </IconButton>
      </Box>
      <Stack height="44px" px="12px" sx={{"& button":{backgroundColor:"inherit",border:"1px solid rgb(51, 54, 57)"},"& button:hover":{backgroundColor:"inherit !important"}}}>
        <Search/>
      </Stack>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "black",
          paddingX: "131px",
          alignItems: "center",
        }}
      >
        <CardHeader
        sx={{
            display: "flex",
            color: "white !important",
            padding: 0,
            marginTop:"32px"
          }}
          title="Gönderileri daha sonrası için kaydet"
          titleTypographyProps={{
            fontWeight: 800,
            marginBottom: 1,
            fontSize: "31px",
            lineHeight:"36px"
          }}
          subheader="Gelecekte kolayca bulabilmek için gönderileri yer işaretlerine ekle."
          subheaderTypographyProps={{
            color: "rgb(113, 118, 123)",
            marginBottom: "18px",
            fontSize: "15px",
            fontWeight: "400",
          }}
          
        />
      </Card>
    </Box>
  );
};
