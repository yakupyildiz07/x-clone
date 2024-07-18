import { Box, Button, Card, CardActions, CardHeader } from "@mui/material";

export const Choose = () => {
  return (
    <Box
      // width="599px"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRight="1px solid rgb(47, 51, 54)"
            sx={{
        
        '@media (min-width: 1018px)': {width:"599px"},
        '@media (max-width: 1017px)': {display:"none"},
      }}
    >
      <Card
        sx={{
          backgroundColor: "black",
          paddingX: "32px",
          direction: "flex-start",
          height: "164px",
          width: "336px",
        }}
      >
        <CardHeader
          title="Mesaj seç"
          titleTypographyProps={{
            fontWeight: 800,
            marginBottom: 1,
            fontSize: "31px",
          }}
          subheader="Mevcut sohbetlerin arasından seçim yap, yeni bir sohbet başlat veya sörfe devam et."
          subheaderTypographyProps={{
            color: "rgb(113, 118, 123)",
            marginBottom: "18px",
            fontSize: "15px",
            fontWeight: "400",
          }}
          sx={{
            display: "flex",
            color: "white !important",
            padding: 0,
            alignItems: "baseline",
          }}
        />

        <CardActions sx={{ p: 0 }}>
          <Button
            variant="contained"
            sx={{
              minHeight: "52px",
              minWidth: "52px",
              backgroundColor: "rgb(29, 155, 240) !important",
              borderRadius: 30,
              fontWeight: 700,
              textTransform: "capitalize",
              fontSize: 15,
              paddingX: "32px",
            }}
          >
            Yeni Mesaj
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
