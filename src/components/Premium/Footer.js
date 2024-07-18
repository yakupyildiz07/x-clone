import {
  Box,
  Button,
  Card,
  CardActions,
  Link,
  Stack,
  Typography,
} from "@mui/material";
export const Footer = ({ selectedCard }) => {

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "fixed",
        bottom: "0",  
        backgroundColor: "black",
        borderTop: "1px solid rgb(47, 51, 54)",
        padding: "16px",
        direction: "row",
        width: "-webkit-fill-available",
        height: "auto",
        '@media (max-width: 500px)': {display:"none"}
      }}
    >


<Box
  sx={{
    display: "flex",
    flexDirection: "column",
    color: "white !important",
    padding: 0,
    alignItems: "baseline",
    minWidth: "225px",
    maxWidth: "475px",
  }}
>
  <Typography
    variant="h6"
    sx={{ fontSize: "20px", fontWeight: 400, lineHeight: "24px" }}
  >
    {selectedCard.title}
  </Typography>
  <Stack flexDirection="row" alignItems="baseline">
  <Typography
    variant="h4"
    sx={{ fontSize: "36px", fontWeight: 700, color: "white", mt:"16px" }}
  >
    {selectedCard.annualPrice2}
  </Typography>
  <Typography
      sx={{ fontSize: "15px", fontWeight: 400, color: "white", ml: "4px" }}

  >{selectedCard.plan ? "/ay" :"/yıl"}</Typography>
  </Stack>
  <Typography
      sx={{ fontSize: "15px", fontWeight: 400, color: "white", ml: "4px" }}

  >{selectedCard.plan ? "Aylık ":"Yıllık "}olarak faturalandırılır</Typography>
</Box>
      

      <CardActions
        sx={{
          p: 0,
          flexDirection: "column",
          minWidth: "225px",
          maxWidth: "475px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(29, 155, 240) !important",
            borderRadius: "9999px",
            fontWeight: 700,
            textTransform: "capitalize",
            fontSize: 15,
            paddingX: "16px",
            mb: "12px",
            minHeight: "36px",
            width:"100%"
          }}
        >
          Abone Ol ve Ödeme Yap
        </Button>
        <Box
          p={1}
          border="1px solid rgb(89, 93, 98)"
          borderRadius="8px"
          color="rgb(182, 185, 188)"
          fontSize="13px"
          fontWeight={400}
          lineHeight="16px"
          ml="0 !important"
          textAlign="justify"
        >
          Abone olarak {" "}
          <Link href="https://legal.twitter.com/purchaser-terms">
            Alıcı Hizmet Şartlarını
          </Link>{" "}
          kabul etmiş olursun. Abonelikler, Şartlar'da açıklandığı gibi, iptal
          edilene kadar otomatik olarak yenilenir.{" "}
          <Link href="https://legal.twitter.com/purchaser-terms.html#cancelpremium">
            Dilediğin zaman iptal et.
          </Link>{" "}
          Ek ücretleri önlemek için yenileme işleminden en az 24 saat önce iptal
          et. Abone olmak için onaylanmış bir telefon numarası gerekir. Başka
          bir platformdan abone olduysan aboneliğini söz konusu platformdan
          yönet.
        </Box>
      </CardActions>
    </Card>
  );
};
