import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Card, CardActions, CardHeader, IconButton } from '@mui/material';
import { useMediaQuery } from '@mui/material';

export const Main4 = () => {
  return (
    <Box
      width="990px"
      boxSizing="border-box"
      display="flex"
      flexDirection="column"
      border="1px solid rgb(47, 51, 54) "
      borderTop="none"
      borderBottom="none"
      sx={{
      '@media (max-width: 1018px)': {width:"600px"},
      '@media (max-width: 718px)': {width:"inherit"},}}
    >
      <Box p={1} display="flex" flexDirection="column" gap="350px">
        <IconButton sx={{ marginRight: "auto", color: "rgb(239, 243, 244)" }}>
          <ArrowBackIcon />
        </IconButton>
        
    <Card
    
      sx={{
        display:"flex",
        flexDirection:"column",
        backgroundColor: "black",
        paddingX: "32px",
        alignItems:"center"
        
      }}
    >
      <CardHeader
        title="Bir şeyler Grokla"
        titleTypographyProps={{ fontWeight: 800, marginBottom: 1 ,fontSize:"34px",textAlign:"center"}}
        subheader="Premium aboneleri artık en gelişmiş yapay zeka aracımız olan Grok'u X uygulamasında kullanabilir."
        subheaderTypographyProps={{ color: "rgb(113, 118, 123)", marginBottom:"18px",fontSize:"15px",fontWeight:"400" }}
        sx={{
          display: "flex",
          color: "white !important",
          padding: 0,
        }}
      />

      <CardActions sx={{ p: 0 }}>
        <Button
          variant="contained"
          sx={{
            minHeight:"44px",
            minWidth:"44px",
            backgroundColor: "rgb(239, 243, 244) !important",
            borderRadius: 30,
            fontWeight: 700,
            textTransform: "none",
            fontSize: 15,
            paddingX: "24px",
            color:"black"
          }}
        >
          Hemen abone ol
        </Button>
      </CardActions>
    </Card>
    
      </Box>
    </Box>
  );
};
