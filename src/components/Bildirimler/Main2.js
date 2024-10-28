import React from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Tab,
  Typography,
  IconButton,
  List,
  ListItemButton,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import XIcon from "@mui/icons-material/X";
import WarningIcon from "@mui/icons-material/Warning";
import { Link } from "react-router-dom";
export const Main2 = () => {
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const mobileScreen = useMediaQuery('(max-width:700px)')

  return (
    <Box
      width="600px"
      boxSizing="border-box"
      display="flex"
      flexDirection="column"
      border="1px solid rgb(47, 51, 54) "
      borderTop="none"
      borderBottom="none"
      sx={{ "@media (max-width: 718px)": { width: "inherit" } }}
    >
      <Box display="flex" p={1} alignItems="center">
      {mobileScreen ?  <Link to="/profile">
      <Avatar
        
        alt="Remy Sharp"
        src="https://pbs.twimg.com/profile_images/1800433408708907008/Px7QWUJU_400x400.jpg"
        sx={{ margin: "0 20px 0 0" ,width:"32px",height:"32px" }}
      />
      </Link>:"" }
        <Typography variant="h6" fontWeight="700">
          Bildirimler
        </Typography>
        <IconButton sx={{ marginLeft: "auto", color: "white" }}>
          <SettingsIcon />
        </IconButton>
      </Box>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          gap="10px"
          sx={{
            borderBottom: "1px solid rgb(47,51,54)",
            "& .css-heg063-MuiTabs-flexContainer": {
              justifyContent: "space-around",
            },
          }}
        >
          <Tab
            value="0"
            sx={{
              padding: "16px",
              color: value === "0" ? "white !important" : "rgb(113, 118, 123)",
              fontWeight: value === "0" ? "700" : "500",
              fontSize: "15px",
              textTransform: "capitalize",
              marginX: "10px",
            }}
            label="Tümü"
          />
          <Tab
            value="1"
            sx={{
              padding: "16px",
              color: value === "1" ? "white !important" : "rgb(113, 118, 123)",
              fontWeight: value === "1" ? "700" : "500",
              fontSize: "15px",
              textTransform: "capitalize",
              marginX: "10px",
            }}
            label="Onaylanmış"
          />
          <Tab
            value="2"
            sx={{
              padding: "16px",
              color: value === "2" ? "white !important" : "rgb(113, 118, 123)",
              fontWeight: value === "2" ? "700" : "500",
              fontSize: "15px",
              textTransform: "capitalize",
              marginX: "10px",
            }}
            label="Bahsedenler"
          />
        </TabList>
        <TabPanel value="0" sx={{ p: 0 }}>
          <List>
            <ListItemButton
              sx={{
                height: "64px",
                p: "12px 16px",
                borderBottom: "1px solid rgb(47,51,54)",
              }}
            >
              <XIcon fontSize="large" sx={{ mr: "10px" }} />
              @yakupyildiz0 adlı hesabına 20 Tem 2024 tarihinde yeni bir
              cihazdan giriş yapıldı. Bunu şimdi inceleyebilirsin.
            </ListItemButton>
            <ListItemButton
              sx={{
                height: "64px",
                p: "12px 16px",
                borderBottom: "1px solid rgb(47,51,54)",
              }}
            >
              <WarningIcon
                fontSize="large"
                color="warning"
                sx={{ mr: "10px" }}
              />
              @yakupyildiz0 adlı hesabına 20 Tem 2024 tarihinde şüpheli görünen
              bir giriş denemesi yapıldı. Bunu şimdi inceleyebilirsin.
            </ListItemButton>
          </List>
        </TabPanel>
        <TabPanel value="2" sx={{ p: "0 32px", m: "32px 99px" }}>
          <Card px={4} sx={{ backgroundColor: "inherit" }}>
            <CardMedia
              component="img"
              height="168"
              image="https://abs.twimg.com/responsive-web/client-web/verification-check-400x200.v1.46c9cb39.png"
              alt="none"
              sx={{ m: "16px 0 36px 0" }}
            />

            <CardContent sx={{ p: "0 !important" }}>
              <Typography
                gutterBottom
                lineHeight="36px"
                fontSize="31px"
                fontWeight="800"
                color="rgb(231, 233, 234)"
                sx={{}}
              >
                Burada görecek bir şey yok. Henüz...
              </Typography>

              <Typography
                color="rgb(113, 118, 123)"
                fontSize="15px"
                fontWeight="400"
                marginBottom="28px"
                lineHeight="20px"
              >
                Onaylanmış bir hesaptan gelen beğeniler, bahsetmeler, yeniden
                gönderiler ve daha birçok şeyi burada bulabilirsin.
                <Typography
                  color="rgb(231, 233, 234)"
                  fontWeight="700"
                  component="a"
                  href="https://help.x.com/tr/managing-your-account/about-x-verified-accounts"
                >
                  Daha fazla bilgi al
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value="1" sx={{ p: "0 32px", m: "32px 99px" }}>
          <Card px={4} sx={{ backgroundColor: "inherit" }}>
            <CardMedia
              component="img"
              height="168"
              image="https://abs.twimg.com/responsive-web/client-web/verification-check-400x200.v1.46c9cb39.png"
              alt="none"
              sx={{ m: "16px 0 36px 0" }}
            />

            <CardContent sx={{ p: "0 !important" }}>
              <Typography
                gutterBottom
                lineHeight="36px"
                fontSize="31px"
                fontWeight="800"
                color="rgb(231, 233, 234)"
                sx={{}}
              >
                Burada görecek bir şey yok. Henüz...
              </Typography>

              <Typography
                color="rgb(113, 118, 123)"
                fontSize="15px"
                fontWeight="400"
                marginBottom="28px"
                lineHeight="20px"
              >
                Onaylanmış bir hesaptan gelen beğeniler, bahsetmeler, yeniden
                gönderiler ve daha birçok şeyi burada bulabilirsin.
                <Typography
                  color="rgb(231, 233, 234)"
                  fontWeight="700"
                  component="a"
                  href="https://help.x.com/tr/managing-your-account/about-x-verified-accounts"
                >
                  Daha fazla bilgi al
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </TabPanel>
      </TabContext>
    </Box>
  );
};
