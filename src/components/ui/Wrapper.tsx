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
          xs: "calc(100vh - 108.02px)",
          sm: "calc(100vh - 116.02px)",
        },
        bgcolor: "primary.dark",
        paddingTop: 2,
      }}
    >
      <Container maxWidth="lg" disableGutters={false}>
        {children}
      </Container>
    </Box>
  );
};

export default Wrapper;
