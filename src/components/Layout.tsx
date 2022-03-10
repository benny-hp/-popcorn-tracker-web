import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
