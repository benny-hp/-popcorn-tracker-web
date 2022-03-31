import { Box, Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";

const Footer = () => {
  return (
    <Box
      component="footer"
      bgcolor={"primary.main"}
      sx={{ paddingTop: 2, paddingBottom: 2 }}
    >
      <Typography variant="body2" color="text.primary" align="center">
        {"Copyright © "}
        {new Date().getFullYear()}
        {" by "}
        <MuiLink color="inherit" href="https://bennyhernandez.com/">
          Benny Hernandez
        </MuiLink>
      </Typography>
      <Typography variant="body2" color="text.primary" align="center">
        Powered by{" "}
        <MuiLink
          color="inherit"
          href="https://www.themoviedb.org/?language=en-US"
        >
          TMDB
        </MuiLink>
      </Typography>
    </Box>
  );
};

export default Footer;
