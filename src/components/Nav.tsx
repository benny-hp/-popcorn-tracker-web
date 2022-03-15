import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import Link from "./Link";

interface Props {
  returnButton?: boolean;
}

const Nav = ({ returnButton }: Props) => {
  return (
    <Box bgcolor={"primary.main"}>
      <Container maxWidth="lg" disableGutters={false}>
        <AppBar position="static" sx={{ boxShadow: "none" }}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={Link}
              href="/"
              color="text.primary"
              sx={{ textDecoration: "none" }}
            >
              Popcorn Tracker
            </Typography>
            {returnButton ? (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="add note"
                LinkComponent={Link}
                href="/"
                sx={{ marginLeft: "auto" }}
              >
                <ArrowBackIcon />
              </IconButton>
            ) : (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="add note"
                sx={{ marginLeft: "auto" }}
                LinkComponent={Link}
                href="/search/"
              >
                <AddIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};

export default Nav;
