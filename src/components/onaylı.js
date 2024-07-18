import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
  Button,
  Link,
  ButtonGroup,
  IconButton,
  CardActions,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const Onaylı = () => {
  
  const [btn, setbtn] = React.useState(1);
  const [value, setvalue] = React.useState(0);
  
  const handleClick = (e) => {
    if (e.target.id === "second") {
      setbtn(2);
    } else {
      setbtn(1);
    }
  };

  const clrChange=(e)=>{
    if (e.target.id==="tam") {
      setvalue(1)
    }else
{setvalue(0)}
  }
  const cardData = [
    {
      id: 0,
      title: "X'te işini daha hızlı büyüt ve  ",
      titlee: "USD ücretsiz reklam kredisi kazan",
      subtitle:
        "Organik olarak daha fazla müşteriye ulaş, ağındaki kişileri ilişkili hesap olarak ekle veya bir sonraki işe alacağın kişiyi bul.",
      subtitle2: "Reklam vermeyi dene, öncelikli destek ve reklam kredileriyle işini büyüt.",
      annualPrice: "Aylık olarak faturalandırılır",
      annualPrice2: " ₺56,25",
      features: [
        "Altın onay işareti",
        "Öncelikli destek",
        "Premium+",
        "Hiring",
        "Artırılmış erişim",
        "İlişkili hesaplar",
      ],
      description:`+ Kısa bir süreliğine kuruluşun veya kuruluşunun ilişkili
                  hesapları tarafından ${" "}${btn === 1 ? "HER YIL" : "HER AY"}${" "}
                  kullanılabilecek${" "}
                  ${btn === 1 ? "$12,000" : "$1,000"} USD reklam kredisi ve özel
                  destek.${" "}`,
                  
      description2:`+ Kısa bir süreliğine kuruluşun tarafından ${" "}${btn === 1 ? "HER YIL" : "HER AY"}${" "}
                  kullanılabilecek${" "}
                  ${btn === 1 ? "$2,500" : "$200"} USD reklam kredisi ve özel
                  destek.${" "}`,
    },
  ];
  return (
    <Stack alignItems="center"  width="600px" bgcolor="black" sx={{"@media (max-width: 718px)": {width:"auto"}}} >
      <Stack
        flexDirection="row"
        width="-webkit-fill-available"
        justifyContent="flex-start"
        alignItems="center"
        px={2}
        height="53px"
      >
        <IconButton sx={{ mr: "180px",p:"0" }}>
          <Link color="rgb(231, 233, 234)" href="/">
            <CloseIcon fontSize="inherit"/>
          </Link>
        </IconButton>
        <Typography
          color="rgb(231,233,234)"
          fontSize="20px"
          fontWeight="700"
          lineHeight="24px"
        >
          Onaylı Kuruluşlar
        </Typography>
      </Stack>
      {cardData.map((card) => (
        <Box textAlign="center" p="0 32px 16px 32px">
          <ButtonGroup
            sx={{
              bgcolor: "rgb(32, 35, 39)",
              width: "auto",
              mb: 2,
              p: "2px",
              borderRadius: "9999px",
              height: "32px",
            }}
            disableElevation
            disableDivider
            variant="text"
            aria-label="Disabled button group"
          >
            <Button
              onClick={clrChange}
              // onChange={handleChange}
              value={value}
              disableRipple
              id="temel"
              sx={{
                p: "4px 8px",
                border:
                  value === 0
                    ? "2px solid black !important"
                    : "2px solid rgb(32,35,39) !important",
                borderRadius: "9999px",
                backgroundColor: value === 0 ? "black" : "rgb(32,35,39)",
                color: "rgb(232,234,235)",
                textTransform: "none",
                fontSize:"15px",
                fontWeight:700,
                ":hover": {
                  backgroundColor: value === 0 ? "black" : "rgb(32,35,39)",
                },
              }}
            >
              Temel
            </Button>
            <Button
              onClick={clrChange}
              disableRipple
              id="tam"
              sx={{
                p: "4px 8px",
                border:
                  value === 1
                    ? "2px solid black !important"
                    : "2px solid rgb(32,35,39) !important",
                borderRadius: "9999px",
                backgroundColor: value === 1 ? "black" : "rgb(32,35,39)",
                color: "rgb(232,234,235)",
                textTransform: "none",
                fontSize:"15px",
                fontWeight:700,
                ":hover": {
                  backgroundColor: value === 1 ? "black" : "rgb(32,35,39)",
                },
              }}
            >
              Tam erişim
            </Button>
          </ButtonGroup>

          <Card
            sx={{
              cursor: "pointer",
              height: "inherit",
              backgroundColor: "rgb(22,24,28)",
              color: "rgb(231, 233, 234)",
              borderRadius: "12px",
              padding: "16px",
              mb: "16px",
              textAlign: "start",
              p: "16px",
              width:"504px",
              "@media (max-width: 718px)": {width:"auto"}
            }}
          >
            <CardContent sx={{ p: "0 !important", flexGrow: "1" }}>
              <Typography
                color="rgb(113, 118, 123)"
                fontSize="23px"
                fontWeight="700"
                lineHeight="28px"
              >
                {value === 1 ? "Tam erişim" : "Temel"}
              </Typography>
              <Typography
                color="rgb(231,233,234)"
                fontSize="34px"
                fontWeight="700"
                lineHeight="40px"
              >
                {card.title}
                {value===1?(btn === 1 ? "$12,000" : "$1,000"):(btn === 1 ? "$2,500" : "$200")}
                {card.titlee}
              </Typography>
              <Typography
                display="flex"
                flexDirection="row"
                alignItems="baseline"
                fontSize="15px"
                fontWeight="500"
                lineHeight="20px"
                sx={{ margin: "16px 0 8px 0" }}
              >
                {value===1?card.subtitle:card.subtitle2}
              </Typography>
              <List sx={{ py: "0", mt: "16px" }}>
                {card.features.map((feature, idx) => (
                  <ListItem key={idx} disableGutters sx={{ p: 0 }}>
                    <ListItemIcon sx={{ minWidth: "19px", height: "15px" }}>
                      <CheckIcon
                        fontSize="inherit"
                        sx={{ color: "rgb(231,233,234)" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        lineHeight: "20px",
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "rgb(231, 233, 234)",
                      }}
                      primary={feature}
                    />
                  </ListItem>
                ))}
              </List>

              <Box
                color="rgb(231, 233, 234)"
                fontSize="15px"
                fontWeight={400}
                lineHeight="20px"
              >
                {value===1?card.description:card.description2}
                <Link href="https://help.x.com/tr/using-x/verified-organizations/ads-terms">
                    Daha fazla bilgi al
                  </Link>
              </Box>
            </CardContent>
          </Card>

          <Stack flexDirection="row" justifyContent="space-between">
            <Button
              onClick={handleClick}
              id="first"
              sx={{
                border:
                btn=== 1
                  ? "2px solid rgb(29, 155, 240)"
                  : "2px solid transparent",
                maxWidth: "50%",
                boxShadow:
                  " rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
                p: "16px",
                flexDirection: "column",
                textAlign: "start",
                alignItems: "flex-start",
                width:"258px",
                "@media (max-width: 718px)": {width:"auto"},
                borderRadius:"12px",
                ":hover": {
                  backgroundColor: "rgb(22,24,28)",
                },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgb(0, 37, 26)",
                  color: "rgb(194, 241, 220)",
                  fontSize: "11px",
                  fontWeight: 700,
                  borderRadius: "9999px",
                  px: "4px",
                  height: "20px",
                  width: "max-content",
                  textTransform: "none",
                  mt: "0",
                }}
              >
                %16 TASARRUF ET
              </Box>

              <Box height="min-content">
                <Stack flexDirection="row" alignItems="baseline">
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "rgb(231, 233, 234)",
                    }}
                  >
                    {value===0 ? "4.858,33":"16.041,67"}
                    </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "rgb(231, 233, 234)",
                      ml: "4px",
                      textTransform: "none",
                    }}
                  >
                    /ay
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "rgb(113,118,123)",
                    textTransform: "none",
                  }}
                >
                  Yıllık olarak faturalandırıldığında
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "rgb(113,118,123)",
                    textTransform: "none",
                  }}
                >
                  {value === 0 ? "₺58.300,00" : "₺192.500,00"}
                </Typography>
              </Box>
            </Button>

            <Button
              onClick={handleClick}
              id="second"
              sx={{
                border:btn=== 2
                ? "2px solid rgb(29, 155, 240)"
                : "2px solid transparent",
                maxWidth: "50%",
                boxShadow:
                  " rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
                p: "16px",
                flexDirection: "column",
                textAlign: "start",
                alignItems: "flex-start",
                width:"258px",
                "@media (max-width: 718px)": {width:"auto"},
                borderRadius:"12px",
                ":hover": {
                  backgroundColor: "rgb(22,24,28)",
                },

              }}
            >
              
              <Box height="min-content">
                <Stack flexDirection="row" alignItems="baseline">
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "rgb(231, 233, 234)",
                    }}
                  >
                    {value===0?"5.780,00":"19.100,00"}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "rgb(231, 233, 234)",
                      ml: "4px",
                      textTransform: "none",
                    }}
                  >
                    /ay
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "rgb(113,118,123)",
                    textTransform: "none",
                  }}
                >
                  Aylık olarak faturalandırılır
                </Typography>
              </Box>
            </Button>
          </Stack>
          <CardActions
            sx={{
              p: 0,
              flexDirection: "column",

            }}
          >
            <Box
              p={1}
              color="rgb(113,118,123)"
              fontSize="11px"
              fontWeight={400}
              lineHeight="12px"
              ml="0 !important"
              textAlign="justify"
              mt={2}
            >
              Tam Erişim için ücret {btn===1?"₺192.500,00/yıl":"₺19.100,00/ay"} (vergiler dahil)
              şeklindedir. Her bir ek ilişkili hesabın ücreti, kullanıcı adı
              başına {btn===1?"₺21.000,00/yıl":"₺960,00/ay"}  (vergiler dahil) şeklindedir.{" "}
              <Link href="https://help.x.com/tr/using-x/verified-organizations#verifiedorgs-pricing">
                Daha fazla bilgi al
              </Link>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgb(239, 243, 244) !important",
                color: " rgb(15, 20, 25)",
                borderRadius: "9999px",
                fontWeight: 700,
                textTransform: "capitalize",
                fontSize: 15,
                paddingX: "16px",
                my: "16px",
                minHeight: "36px",
                width: "100%",
              }}
            >
              Abone Ol ve Ödeme Yap
            </Button>
            <Box
              p={1}
              color="rgb(113,118,123)"
              fontSize="11px"
              fontWeight={400}
              lineHeight="12px"
              ml="0 !important"
              textAlign="justify"
            >
              Abone Ol'a tıklayarak{" "}
              <Link href="https://legal.twitter.com/purchaser-terms">
                Alıcı Hizmet Şartlarımızı
              </Link>{" "}
              kabul etmiş olursun. Abonelikler, sen iptal edene kadar otomatik
              olarak yenilenir. Kaydolan hesaplar, kimlik doğrulama için
              incelenir. Kaydolan hesabın kuruluş olmaması durumunda abonelik
              isteği reddedilir ve para iadesi yapılmaz.
            </Box>
          </CardActions>
        </Box>
      ))}
    </Stack>
  );
};

export default Onaylı;
