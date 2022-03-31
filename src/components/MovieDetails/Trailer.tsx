import React from "react";
import Link from "../Link";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Typography } from "@mui/material";
interface Props {
  video: string;
}
const Trailer = ({ video }: Props) => {
  return (
    <Typography
      sx={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        color: "text.primary",
        "&:hover": {
          color: "orange",
        },
      }}
      component="a"
      href={video}
      target="_blank"
    >
      <PlayArrowIcon />
      Trailer
    </Typography>
  );
};

export default Trailer;
