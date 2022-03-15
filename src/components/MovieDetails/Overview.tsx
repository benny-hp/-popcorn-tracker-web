import { Typography } from "@mui/material";
import React from "react";
interface Props {
  overview: string;
}
const Overview = ({ overview }: Props) => {
  return (
    <>
      <Typography variant="h6" my={2} fontWeight={500}>
        Overview
      </Typography>
      <Typography color="text.secondary" mb={2}>
        {overview}
      </Typography>
    </>
  );
};

export default Overview;
