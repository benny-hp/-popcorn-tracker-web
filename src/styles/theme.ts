import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#353535",
      dark: "#292929",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#fff",
    },
  },
});

export default theme;
