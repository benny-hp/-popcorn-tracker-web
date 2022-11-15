import { Typography } from "@mui/material";
import React from "react";
interface Props {
  tagline: string;
}
const Tagline = ({ tagline }: Props) => {
  return <Typography mt={2}>{tagline}</Typography>;
};

export default Tagline;
