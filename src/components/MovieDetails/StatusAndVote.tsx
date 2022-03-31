import { Box, Typography } from "@mui/material";
import React from "react";
import Link from "../Link";
interface Props {
  homepage: string;
  status: string;
  vote_count: number;
  release_date: string;
}
const StatusAndVote = ({
  homepage,
  release_date,
  status,
  vote_count,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "450px",
      }}
    >
      <Box>
        <Typography
          sx={{
            textDecoration: "none",
            color: "text.primary",
            fontWeight: 500,
            "&:hover": {
              color: "orange",
            },
          }}
          component="a"
          href={homepage}
          target="_blank"
        >
          {status}
        </Typography>
        <Typography color="text.secondary">Status</Typography>
      </Box>

      <Box>
        <Typography color="text.primary" textAlign="center" fontWeight={500}>
          {vote_count}
        </Typography>
        <Typography color="text.secondary">Vote Count</Typography>
      </Box>
      <Box>
        <Typography color="text.primary" fontWeight={500}>
          {new Date(release_date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </Typography>
        <Typography color="text.secondary">Release Date</Typography>
      </Box>
    </Box>
  );
};

export default StatusAndVote;
