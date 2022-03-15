import { Typography } from "@mui/material";
import React from "react";
interface Props {
  genres: string;
}
const Genre = ({ genres }: Props) => {
  return (
    <Typography color={"text.secondary"} variant="caption" component={"span"}>
      {genres}
    </Typography>
  );
};

export default Genre;
