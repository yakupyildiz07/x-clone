import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import PlanCards from "./PlanCards";
import { Footer } from "./Footer";
import PlanTable from "./Table";
import PlanCards2 from "./PlanCards2";
let initialSelectedCardId = 1;  

export const Premium = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [selectedCard, setSelectedCard] = useState(1);
    const [plan, setplan] = useState(1);
    
    const PlanChange=(e)=>{
      if(e.target.id==="aylik"){
        setplan(2);
        setValue(1)
      }
      else {setplan(1);setValue(0)}
    }
  
    const handleCardSelect = (card) => {
      setSelectedCard(card);
      initialSelectedCardId=card.id;
    };
  return (
    <Stack alignItems="center" overflow="hidden">
      <Box
        sx={{
          backgroundImage:
            "radial-gradient(56.1514% 56.1514% at 49.972% 38.959%, rgb(39, 54, 73) 0%, rgb(0, 0, 0) 100%)",
          top: "-300px",
          minHeight: "650px",
          width: "100%",
          position: "absolute",
          zIndex: "-1",
        }}
      ></Box>
      <Stack width="100%">
        <Link href="">
          <IconButton sx={{ color: "white", p: 3, pb: 0 }}>
            <CloseIcon />
          </IconButton>
        </Link>
      </Stack>
      <Stack sx={{ width: "98vw", textAlign: "center" }}>
        <Typography fontWeight="700" fontSize="48px" mb={1}>
          Premium'a yükselt
        </Typography>
        <Typography fontWeight="400" fontSize="17px" color="rgb(182,185,188)">
          Gelişmiş bir deneyim, özel içerik üreticisi araçları, üst düzey
          doğrulama ve güvenlikten yararlanın.
        </Typography>
        <Typography fontWeight="400" fontSize="17px" color="rgb(182,185,188)">
          (Kuruluşlar
          <Link
            color="rgb(231,233,234)"
            fontWeight="700"
            sx={{
              textDecorationThickness: "2px",
              textDecorationColor: "rgb(231,233,234)",
            }}
          >
            buradan kaydolabilir
          </Link>
          )
        </Typography>
      </Stack>
      <ButtonGroup
        sx={{
          bgcolor: "rgb(32, 35, 39)",
          width: "min-content",
          mt: 2,
          p: "2px",
          borderRadius: "9999px",
        }}
        disableElevation
        disableDivider
        variant="text"
        aria-label="Disabled button group"
      >
        <Button
        onClick={PlanChange}
        onChange={handleChange}
        disableRipple
        id="yillik"
          sx={{
            p: "4px 8px",
            border: value === 0 ? "2px solid black !important": "2px solid rgb(32,35,39) !important",
            borderRadius: "9999px",
            backgroundColor: value === 0 ? "black" : "rgb(32,35,39)",
            color: "rgb(232,234,235)",
            textTransform:"none",
            ":hover": { backgroundColor: value === 0 ? "black" : "rgb(32,35,39)" },
          }}
        >
          Yıllık
          <Box
            sx={{
              ml: "4px",
              backgroundColor: "rgb(0, 37, 26)",
              color: "rgb(194, 241, 220)",
              fontSize: "11px",
              fontWeight: 700,
              borderRadius: "9999px",
              px: "4px",
              height: "20px",
              width: "max-content",
              textTransform: "none",
            }}
          >
            En Avantajlı
          </Box>
        </Button>
        <Button
        onClick={PlanChange}
        onChange={handleChange}
        disableRipple
        id="aylik"
          sx={{
            p: "4px 8px",
            border: value === 1 ? "2px solid black !important": "2px solid rgb(32,35,39) !important",
            borderRadius: "9999px",
            backgroundColor: value === 1 ? "black" : "rgb(32,35,39)",
            color: "rgb(232,234,235)",
            textTransform:"none",
            ":hover": { backgroundColor: value === 1 ? "black" : "rgb(32,35,39)" },
          }}
        >
          Aylık
        </Button>
      </ButtonGroup>
      {plan===1 ? <PlanCards onCardSelect={handleCardSelect} initialSelectedCardId={initialSelectedCardId} />:<PlanCards2 onCardSelect={handleCardSelect} initialSelectedCardId={initialSelectedCardId} />}
      {selectedCard && <Footer selectedCard={selectedCard} />}
      <PlanTable/>
    </Stack>
  );
};
