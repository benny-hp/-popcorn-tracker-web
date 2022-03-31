import { Button, ButtonTypeMap, ExtendButtonBase } from "@mui/material";
import React from "react";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

type ButtonProps = {} & React.ComponentProps<
  ExtendButtonBase<ButtonTypeMap<{}, "button">>
>;

const RemoveButton = ({ ...rest }: ButtonProps) => {
  return (
    <Button
      sx={{
        background: "transparent",
        color: "text.primary",
      }}
      startIcon={<RemoveCircleOutlineIcon />}
      {...rest}
    >
      remove
    </Button>
  );
};

export default RemoveButton;
