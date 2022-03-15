import { Button, ButtonTypeMap, ExtendButtonBase } from "@mui/material";
import React from "react";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

type ButtonProps = {
  watched: boolean;
} & React.ComponentProps<ExtendButtonBase<ButtonTypeMap<{}, "button">>>;

const WatchlistButton = ({ watched, ...rest }: ButtonProps) => {
  return (
    <Button
      sx={{ background: "transparent", color: "text.primary" }}
      startIcon={
        watched ? <PlaylistAddIcon /> : <PlaylistAddCheckIcon color="error" />
      }
      {...rest}
    >
      add to watchlist
    </Button>
  );
};

export default WatchlistButton;
