import { Button, Input,   } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";


export default function Search() {
  const [button, setbutton] = useState("none");
  const [icon, seticon] = useState("");
  const [isTextFieldVisible, setIsTextFieldVisible] = useState(false);

  const handleDocumentClick = (event) => {
    // Eğer tıklanan eleman butonun kendisi değilse, stilleri sıfırla
    if (event.target.closest(".search-button") === null) {
      setbutton("none");
      seticon("");
    }
  };

  useEffect(() => {
    // document'a tıklama olay dinleyicisi ekle
    document.addEventListener("click", handleDocumentClick);
    return () => {
      // component unmount olduğunda olay dinleyicisini temizle
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  

  const handleButtonClick = () => {
    setIsTextFieldVisible(true);
    setbutton("1px solid rgb(29, 155, 240) !important");
    seticon("rgb(29, 155, 240) !important");
  };


  return (
    <>
      <Button
        
        className="search-button"
        disableRipple
        paddingRight={2}
        fullWidth
        sx={{
          position:"sticky",
          top:0,
          zIndex:"2",
          ":hover": { backgroundColor: "rgb(32,35,39) !important" },
          textTransform: "capitalize",
          justifyContent: "flex-start",
          borderRadius: "30px",
          backgroundColor: "rgb(32, 35, 39)",
          height: "46px",
          marginTop: "5px",
          color: "rgb(113, 118, 123) !important",
          border: `${button}`,
          "& .MuiInput-input": {
            color: "white",
            border: "none",
          },

          "& .css-uxul4e-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before":
            { border: "none" },
          "& .MuiInput-underline::before": { border: "none" },
          "& .MuiInput-underline::after": { border: "none" },
        }}
        size="large"
        startIcon={
          <SearchIcon
            fontSize="small"
            sx={{ paddingRight: 1, color: `${icon}`, marginLeft: "10px" }}
          />
        }
        onClick={handleButtonClick}
      >
        <Input
          placeholder="Ara"
          fullWidth
          inputProps={{ color: "white !important" }}
          sx={{ border: "none" }}
        />


      </Button>
    </>
  );
}
