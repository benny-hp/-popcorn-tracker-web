import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

const Nav = () => {
  return (
    <Box bgcolor={"primary.main"}>
      <Container maxWidth="lg" disableGutters={false}>
        <AppBar position="static" sx={{ boxShadow: "none" }}>
          <Toolbar disableGutters>
            <Typography variant="h6" component="h2" sx={{ cursor: "pointer" }}>
              Popcorn Tracker
            </Typography>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="add note"
              sx={{ marginLeft: "auto" }}
            >
              <AddIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};

export default Nav;
