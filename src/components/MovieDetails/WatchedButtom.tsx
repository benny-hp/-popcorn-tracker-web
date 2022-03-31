import { Button, ButtonTypeMap, ExtendButtonBase } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import React from "react";

type ButtonProps = {
  watched: boolean | null;
  home?: boolean;
} & React.ComponentProps<ExtendButtonBase<ButtonTypeMap<{}, "button">>>;

const WatchedButton = ({ watched, home, ...rest }: ButtonProps) => {
  return (
    <Button
      sx={{ background: "transparent", color: "text.primary" }}
      startIcon={watched ? <CheckBoxIcon color="error" /> : <CheckIcon />}
      {...rest}
    >
      {home ? "watched" : "set watched"}
    </Button>
  );
};

export default WatchedButton;
