import {
  Avatar,
  Box,
  Button,
  CardHeader,
  CardMedia,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const Main7 = () => {
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
        overflow="inherit"
        top="0"
        px={2}
        pt="4px"
        display="flex"
        flexDirection="row"
        align-items="center"
        position="sticky"
        sx={{ backdropFilter: "blur(12px)" }}
        zIndex={1}
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
        <CardHeader
          title="Yakup🔒"
          titleTypographyProps={{ fontSize: "20px", fontWeight: "700" }}
          subheader="1.776 gönderi "
          subheaderTypographyProps={{
            color: "rgb(113, 118, 123)",
            fontSize: "13",
          }}
          sx={{
            display: "flex",
            color: "rgb(231, 233, 234)",
            padding: 0,
            alignItems: "baseline",
          }}
        />
      </Box>
      <CardMedia
        component="img"
        height="auto"
        image="https://pbs.twimg.com/profile_banners/1627790558/1635833172/600x200"
        alt="crypto"
      />
      <Box p="12px 16px">
        <Stack direction="row" height="69px">
          <Avatar src="https://pbs.twimg.com/profile_images/1800433408708907008/Px7QWUJU_400x400.jpg" sx={{ mr: "auto",minHeight:"138.5px",minWidth:"138.5px",position:"relative",top:"-87px",border:"4px solid black" }} />
          <IconButton
            sx={{
              border: "1px solid rgb(83, 100, 113)",
              backgroundColor: "black",
              borderRadius: "50%",
              color: "rgb(231, 233, 234)",
              m:"0 8px 12px 0",
              height:"34px",
              width:"34px"              
            }}
          >
            <MoreHorizIcon />
          </IconButton>

          <IconButton
            sx={{
              border: "1px solid rgb(83, 100, 113)",
              backgroundColor: "black",
              borderRadius: "50%",
              color: "rgb(231, 233, 234)",
              m:"0 8px 12px 0",
              height:"34px",
              width:"34px"
            }}
          >
            <MailOutlineIcon />
          </IconButton>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white !important",
              borderRadius: 30,
              fontWeight: 700,
              textTransform: "capitalize",
              fontSize: 15,
              padding: "5px 15px",
              color: "black",
              height:"36px"
            }}
          >
            Takip et
          </Button>
        </Stack>
        <CardHeader
          title="Yakup🔒"
          titleTypographyProps={{ fontSize: "20px", fontWeight: "700" }}
          subheader="@yakupyildiz0"
          subheaderTypographyProps={{
            color: "rgb(113, 118, 123)",
            fontSize: "13",
          }}
          sx={{
            display: "flex",
            color: "rgb(231, 233, 234)",
            padding: 0,
            alignItems: "baseline",
            mt:"4px",
            mb:"12px"
          }}
        />
        <Stack direction="row" mb="12px">
        <Stack direction="row" mr="15px" alignItems="center">
        <FmdGoodIcon fontSize="inherit" />
        <Typography  fontSize="15px" color="rgb(113, 118, 123)" ml="5px">İzmir</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
        <CalendarMonthIcon fontSize="inherit"/>
        <Typography fontSize="15px" color="rgb(113, 118, 123)" ml="5px">Eylül 2011 tarihinde katıldı</Typography>
        </Stack>
        </Stack>
        <Stack direction="row">
          <Link underline="none" sx={{color:"ButtonShadow",mr:"20px",fontSize:"14px"}}><Typography color="rgb(231, 233, 234)" component="span" fontWeight="700" fontSize="14px">159</Typography> Takip edilen</Link>
          <Link underline="none" sx={{color:"ButtonShadow",mr:"20px",fontSize:"14px"}}><Typography color="rgb(231, 233, 234)" component="span" fontWeight="700" fontSize="14px">448</Typography> Takipçi</Link>
        </Stack>
        <Stack my="32px" mx="83px" p="40px 20px">
        <CardHeader
        sx={{
            display: "flex",
            color: "white !important",
            // padding: "40px 20px",
            // my:"32px",
            // mx:"83px",
            p:0,  
            // height:"132px",
            height:"min-content",
            width:"inherit"
          }}
          title="Bu gönderiler korumalı"
          titleTypographyProps={{
            fontWeight: 800,
            marginBottom: 1,
            fontSize: "31px",
            lineHeight:"36px"
          }}
          subheader="@yakupyildiz0 adlı kişinin gönderilerini yalnızca onaylı takipçileri görebilir. Erişim istemek için Takip et'e tıkla."
          subheaderTypographyProps={{
            color: "rgb(113, 118, 123)",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight:"20px"
          }}
          
          
        />
        <Link href="https://help.x.com/tr/safety-and-security/public-and-protected-posts" > Daha fazla bilgi al</Link>
        </Stack>
      </Box>
    </Box>
  );
};
