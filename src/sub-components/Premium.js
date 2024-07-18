import { Button, Card, CardActions, CardHeader } from "@mui/material";

export const Premium = () => {
  return (
    <Card
    
      sx={{
        backgroundColor: "black",
        border: "1px solid rgb(47, 51, 54)",
        padding: "12px 16px",
        borderRadius: "16px",
        direction: "flex-start",
        // width: "inherit",
        
      }}
    >
      <CardHeader
        title="Premium'a Abone Ol"
        titleTypographyProps={{ fontWeight: 800, marginBottom: 1 }}
        subheader="Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan."
        subheaderTypographyProps={{ color: "white", marginBottom: 1 }}
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
          size="large"
          sx={{
            backgroundColor: "rgb(29, 155, 240) !important",
            borderRadius: 30,
            fontWeight: 700,
            textTransform: "capitalize",
            fontSize: 15,
            padding: "5px 15px",
          }}
        >
          Abone ol
        </Button>
      </CardActions>
    </Card>
  );
};
