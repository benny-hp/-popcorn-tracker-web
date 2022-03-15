import { Typography } from "@mui/material";
import React from "react";
interface Props {
  tagline: string;
}
const Tagline = ({ tagline }: Props) => {
  return (
    <Typography mt={2} color="ActiveCaption">
      {tagline}
    </Typography>
  );
};

export default Tagline;
