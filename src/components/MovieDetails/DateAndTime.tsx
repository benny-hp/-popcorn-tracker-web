import { Typography } from "@mui/material";
import React from "react";
interface Props {
  release_date: string;
  original_language: string;
  runtime: number;
}
const DateAndTime = ({ release_date, original_language, runtime }: Props) => {
  return (
    <>
      <Typography color={"text.secondary"} variant="caption" component={"span"}>
        {new Date(release_date).toLocaleDateString("en-US")} (
        {original_language.toUpperCase()})
      </Typography>
      <Typography color={"text.secondary"} variant="caption" component={"span"}>
        {runtime} min
      </Typography>
    </>
  );
};

export default DateAndTime;
