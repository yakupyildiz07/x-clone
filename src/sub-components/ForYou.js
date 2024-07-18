import { Grid, Button } from "@mui/material";
import { useState} from "react";
export const ForYou = ({setShowIndexPage,setShowPosts}) => {
  const [classname, setclassname] = useState("");
  const handleClick = () => {
    setclassname("subgrid2");
    setclassname1("");
    setShowPosts(false);
    setShowIndexPage(true)
  };

  const [classname1, setclassname1] = useState("subgrid2");
  const handleClick1 = () => {
    setclassname("");
    setclassname1("subgrid2");
    setShowIndexPage(false);
    setShowPosts(true)
  };

  return (
    <Grid
      position="sticky"
      top={0}
      zIndex={3}
      className="grid"
      container
      spacing={2}
      textAlign="center"
      width="100%"
      m={0}
      overflow="inherit"
    >
      <Grid item xs className="subgrid">
        <Button className={classname1} onClick={handleClick1} fullWidth>
          Sana özel
        </Button>
      </Grid>
      <Grid item xs className="subgrid">
        <Button className={classname} onClick={handleClick} fullWidth>
          Takip Edilenler
        </Button>
      </Grid>
    </Grid>
  );
};
