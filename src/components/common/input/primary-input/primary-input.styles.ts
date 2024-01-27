import { SxStyleType } from "../../../../types/theme-types.ts";
import { SxProps } from "@mui/material";

type RuleNames = "input" | "inputWrapper" | "iconWrapper";

export const primaryInputUseStyles = ({
  wrapperSx,
  sx,
}: {
  wrapperSx?: SxProps;
  sx?: SxProps;
}): SxStyleType<RuleNames> => ({
  inputWrapper: {
    position: "relative",
    width: "100%",
    height: "48px",
    ...wrapperSx,
  },
  input: {
    fontSize: "14px",
    border: 0,
    lineHeight: "22px",
    borderRadius: "4px",
    borderWidth: 0,
    height: "48px",
    width: "100%",
    padding: 0,
    borderStyle: "solid",
    borderColor: "gray200",
    outline: 0,
    "&::placeholder": {
      color: "gray300",
    },

    "& .MuiInputBase-root": {
      height: "inherit",
      "&:hover fieldset": {
        borderColor: "primary.main",
      },
    },
    "&.MuiTextField-root": {
      display: "block",
      width: "100%",
    },
    ...sx,
  },

  iconWrapper: {
    position: "absolute",
    right: "16px",
    top: "50%",
    transform: "translateY(-50%)",
  },
});
