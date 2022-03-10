import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/components/Link";
import Copyright from "../src/components/Copyright";
import Nav from "../src/components/Nav";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <Box
        sx={{
          minHeight: {
            xs: "calc(100vh - 108.02px)",
            sm: "calc(100vh - 116.02px)",
          },
          bgcolor: "primary.dark",
        }}
      ></Box>
    </>
  );
};

export default Home;
