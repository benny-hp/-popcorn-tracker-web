import React from "react";
import Link from "../Link";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
interface Props {
  video: string;
}
const Trailer = ({ video }: Props) => {
  return (
    <Link
      sx={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        color: "text.primary",
        "&:hover": {
          color: "orange",
        },
      }}
      href={video}
      target="_blank"
    >
      <PlayArrowIcon />
      Trailer
    </Link>
  );
};

export default Trailer;
