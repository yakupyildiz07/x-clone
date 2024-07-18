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
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
export const cardData = [
  {
    id:0,
    plan:2,
    title: "Temel",
    price: "₺56,25",
    annualPrice: "Aylık olarak faturalandırılır",
    annualPrice2:" ₺56,25",
    features: [
      "Küçük yanıt artışı",
      "Şifreli direkt mesajlar",
      "Yer işareti klasörleri",
      "Öne Çıkanlar sekmesi",
      "Gönderiyi düzenle",
      "Daha uzun videolar yayınla",
      "Daha uzun gönderiler",
    ],
  },
  {
    id:1,
    plan:2,
    title: "Premium",
    price: " ₺150,00 ",
    annualPrice: "Aylık olarak faturalandırılır",
    annualPrice2:" ₺150,00",
    features: [
      "Temel plandaki her şey ve",
      "Sana Özel'de ve Takip Edilenler'de Yarı Yarıya Daha Az Reklam",
      "Daha büyük yanıt artışı",
      "Gönderi yayınlayarak para kazan",
      "Onay işareti",
      "Grok'a Erken Erişim",
      "X Pro, Analytics, Media Studio",
      "İçerik Üreticisi Abonelikleri",
    ],
  },
  {
    id:2,
    plan:2,
    title: "Premium+",
    price: "₺300,00",
    annualPrice: "Aylık olarak faturalandırılır",
    annualPrice2:" ₺300,00",
    features: [
      "Premium'da sunulan her şey ve",
      "Sana Özel'de ve Takip Edilenler'de Sıfır Reklam",
      "En büyük yanıt artışı",
      "Makale Yaz",
    ],
  },
];

const PlanCards2 = ({ onCardSelect, initialSelectedCardId }) => {
  const [selectedCardIndex, setSelectedCardIndex] = React.useState(initialSelectedCardId);

  React.useEffect(() => {
    if (initialSelectedCardId !== null) {
      onCardSelect(cardData[initialSelectedCardId]);
    }
  }, [initialSelectedCardId, onCardSelect]);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
    onCardSelect(cardData[index]); 
  };

 
  return (
     <Box display="flex" gap="32px" Height="min-content" mt={2}>
      {cardData.map((card, index) => (
        <Card
        key={index}
        onClick={() => handleCardClick(index) }
        
          sx={{
            cursor: "pointer",
            border:
              selectedCardIndex === index
                ? "2px solid rgb(29, 155, 240)"
                : "2px solid transparent",
            maxWidth: "263px",
            minWidth: "263px",
            height:"inherit",
            backgroundColor: "rgb(32, 35, 39)",
            color: "rgb(231, 233, 234)",
            borderRadius: "12px",
            padding: "24px",
            position: "relative",
          }}
        >
          <CardContent sx={{p:"0 !important",flexGrow:"1"}}>
            <Typography fontSize="20px" fontWeight="400">
              {card.title}
            </Typography>
            <Typography
              display="flex"
              flexDirection="row"
              alignItems="baseline"
              fontSize="36px"
              fontWeight="700"
              sx={{ margin: "16px 0 8px 0" }}
            >
              {card.price}
              <Typography fontSize="15px" fontWeight="400" ml="4px">
                / ay
              </Typography>
            </Typography>
            <Stack direction="row" >
            <Typography width="151px" fontSize="15px" fontWeight="400">{card.annualPrice}</Typography>
            </Stack>
            
            <Box
              height="20px"
              width="20px"
              m="24px 24px 8px 8px"
              bgcolor={selectedCardIndex === index ? "rgb(29, 155, 240)" : "black"}
              border={
                selectedCardIndex === index
                  ? "2px solid rgb(29, 155, 240)"
                  : "2px solid rgb(113,118,123)"
              }
              borderRadius={4}
              position="absolute"
              top="0"
              right="0"
            ></Box>
            <List sx={{py:"0",mt:"16px"}}>
              {card.features.map((feature, idx) => (
                <ListItem key={idx} disableGutters sx={{p:0}}>
                  <ListItemIcon sx={{minWidth:"19px",height:"15px"}}>
                    <CheckIcon fontSize="inherit" sx={{ color: "rgb(231,233,234)" }} />
                  </ListItemIcon>
                  <ListItemText sx={{lineHeight:"normal"}} primary={feature} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}

    </Box>
  );
};

export default PlanCards2;
