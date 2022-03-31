import { Box, Container } from "@mui/material";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const Wrapper = ({ children }: Props) => {
  return (
    <Box
      sx={{
        minHeight: {
          xs: "calc(100vh - 128.02px)",
          sm: "calc(100vh - 136.02px)",
        },
        bgcolor: "primary.dark",
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      <Container maxWidth="lg" disableGutters={false}>
        {children}
      </Container>
    </Box>
  );
};

export default Wrapper;
