import {
  Box,
  Button,
  Card,
  Stack,
  Typography,
  IconButton,
  List,
  CardActions,
  CardHeader,
  ListItemButton,
  Avatar,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
export const Whotofollow = () => {
  return (
    <Box
    display="flex"
    flexDirection="column"
    alignItems="baseline"
    gap={2}
    minHeight="100vh"
    sx={{
      '@media (min-width: 1108px)': {width:"350px"},
      '@media (min-width: 1018px)': {width:"290px"},
      '@media (max-width: 1017px)': {display:"none"},
    }}
    
    >
      <Card
        sx={{
          
          backgroundColor: "black",
          border: "1px solid rgb(47, 51, 54)",
          padding: "0",
          borderRadius: "16px",
          direction: "flex-start",
          width: "348px",
        }}
      >
        <CardHeader
          title="Kimi takip etmeli"
          titleTypographyProps={{
            fontWeight: 800,
            padding: "12px 16px",
            fontSize: "20px",
          }}
          sx={{
            display: "flex",
            color: "white !important",
            padding: 0,
            alignItems: "baseline",
          }}
        />

        <CardActions sx={{ p: 0 }}>
          <List
            sx={{
              width: "100%",
              maxWidth: "100%",
              bgcolor: "black",
              p: 0,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              fullWidth
              sx={{
                padding: 0,
                width: "inherit",
              }}
            >
              <Box
                className="ButtonGroup2"
                display="flex"
                flexDirection="row"
                alignItems="center"
                width="100%"
                borderRadius="0 !important"
              >
                <PersonIcon fontSize="large" sx={{ paddingX: 2 }} />
                <Stack display="flex">
                  <Typography
                    variant="button"
                    textAlign="left"
                    textTransform="none"
                    fontSize="15px"
                    fontWeight="700"
                  >
                    Yakup
                  </Typography>
                  <Typography
                    variant="caption"
                    color="rgb(113, 118, 123) !important"
                    textTransform="none"
                    fontSize="15px"
                    fontWeight="400"
                  >
                    @yakupyildiz0
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "white !important",
                    borderRadius: 30,
                    fontWeight: 700,
                    textTransform: "capitalize",
                    fontSize: 15,
                    padding: "5px 15px",
                    color: "black",
                    margin: "0 10px 0 auto",
                  }}
                >
                  Takip et
                </Button>
              </Box>
            </ListItemButton>
            <ListItemButton
              fullWidth
              sx={{
                padding: 0,
                width: "inherit",
              }}
            >
              <Box
                className="ButtonGroup2"
                display="flex"
                flexDirection="row"
                alignItems="center"
                width="100%"
                borderRadius="0 !important"
              >
                <PersonIcon fontSize="large" sx={{ paddingX: 2 }} />
                <Stack display="flex">
                  <Typography
                    variant="button"
                    textAlign="left"
                    textTransform="none"
                    fontSize="15px"
                    fontWeight="700"
                  >
                    Yakup
                  </Typography>
                  <Typography
                    variant="caption"
                    color="rgb(113, 118, 123) !important"
                    textTransform="none"
                    fontSize="15px"
                    fontWeight="400"
                  >
                    @yakupyildiz0
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "white !important",
                    borderRadius: 30,
                    fontWeight: 700,
                    textTransform: "capitalize",
                    fontSize: 15,
                    padding: "5px 15px",
                    color: "black",
                    margin: "0 10px 0 auto",
                  }}
                >
                  Takip et
                </Button>
              </Box>
            </ListItemButton>{" "}
            <ListItemButton
              fullWidth
              sx={{
                padding: 0,
                width: "inherit",
              }}
            >
              <Box
                className="ButtonGroup2"
                display="flex"
                flexDirection="row"
                alignItems="center"
                width="100%"
                borderRadius="0 !important"
              >
                <PersonIcon fontSize="large" sx={{ paddingX: 2 }} />
                <Stack display="flex">
                  <Typography
                    variant="button"
                    textAlign="left"
                    textTransform="none"
                    fontSize="15px"
                    fontWeight="700"
                  >
                    Yakup
                  </Typography>
                  <Typography
                    variant="caption"
                    color="rgb(113, 118, 123) !important"
                    textTransform="none"
                    fontSize="15px"
                    fontWeight="400"
                  >
                    @yakupyildiz0
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "white !important",
                    borderRadius: 30,
                    fontWeight: 700,
                    textTransform: "capitalize",
                    fontSize: 15,
                    padding: "5px 15px",
                    color: "black",
                    margin: "0 10px 0 auto",
                  }}
                >
                  Takip et
                </Button>
              </Box>
            </ListItemButton>
            <ListItemButton
              className="button-in-text"
              sx={{
                fontWeight: "400",
                color: "rgb(29, 155, 240) !important",
                p: "16px",
              }}
              size="small"
            >
              Daha Fazla göster
            </ListItemButton>
          </List>
        </CardActions>
      </Card>
      <Stack direction="row" display="flex" flexWrap="wrap" gap={1} p="0 16px">
      <Link
        href="https://x.com/tos"
        target="_blank"
        role="link"
        underline="hover"
        style={{ textOverflow: "unset", color: "rgb(113, 118, 123)" ,fontSize:"13px",fontWeight:"400" }}
      >
        Hizmet Şartları
      </Link>

      <Link
        href="https://x.com/privacy"
        target="_blank"
        role="link"
        underline="hover"
        style={{ textOverflow: "unset", color: "rgb(113, 118, 123)" ,fontSize:"13px",fontWeight:"400" }}
      >
        Gizlilik Politikası
      </Link>
      <Link
        href="https://help.x.com/tr/rules-and-policies/x-cookies"
        target="_blank"
        role="link"
        underline="hover"
        style={{ textOverflow: "unset", color: "rgb(113, 118, 123)" ,fontSize:"13px",fontWeight:"400" }}
      >
        Çerez Politikası
      </Link>
      <Link
        href="https://legal.x.com/tr/imprint"
        target="_blank"
        role="link"
        underline="hover"
        style={{ textOverflow: "unset", color: "rgb(113, 118, 123)" ,fontSize:"13px",fontWeight:"400" }}
      >
        Imprint
      </Link>
      <Link
        href="https://help.x.com/tr/resources/accessibility"
        target="_blank"
        role="link"
        underline="hover"
        style={{ textOverflow: "unset", color: "rgb(113, 118, 123)" ,fontSize:"13px",fontWeight:"400" }}
      >
        Erişilebilirlik
      </Link>
      <Link
        href="https://business.x.com/en/help/troubleshooting/how-x-ads-work.html"
        target="_blank"
        role="link"
        underline="hover"
        style={{ textOverflow: "unset", color: "rgb(113, 118, 123)" ,fontSize:"13px",fontWeight:"400" }}
      >
        Reklam bilgisi
      </Link>
      <Link
        href="https://x.com/privacy"
        target="_blank"
        role="link"
        underline="hover"
        
        style={{ textOverflow: "unset", color: "rgb(113, 118, 123)" ,fontSize:"13px",fontWeight:"400" }}
      >
        Daha fazla
      </Link>
      <Typography color="rgb(113, 118, 123)" fontSize="13px" fontWeight="400">© 2024 X Corp.</Typography>
      </Stack>
      

    </Box>
  );
};
