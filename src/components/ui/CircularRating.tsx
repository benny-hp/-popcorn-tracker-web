import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ratingColor } from "../../utils/ratingColor";
import { borderRadius } from "@mui/system";

function CircularRating(props: CircularProgressProps & { value: number }) {
  let myColor = ratingColor(props.value);

  return (
    <Box
      sx={{
        display: "inline-flex",
        gap: 1,
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          backgroundColor: "primary.main",
          borderRadius: "50%",
          padding: "0.20rem",
        }}
      >
        <CircularProgress
          sx={{ color: `${myColor}` }}
          size={55}
          variant="determinate"
          {...props}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body2"
            component="div"
            color="text.primary"
            fontWeight={500}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
      <Typography
        fontWeight={500}
        lineHeight={"1.3"}
        variant="caption"
        component={"p"}
      >
        User
        <br />
        Score
      </Typography>
    </Box>
  );
}

export default CircularRating;
