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
        <MuiLink color="inherit" href="https://mui.com/">
          Benny Hernandez
        </MuiLink>
      </Typography>
    </Box>
  );
};

export default Footer;
