import { Button } from "@mui/material";
import { PropsWithChildren } from "react";
import { SxProps } from "@mui/system";
import { ThemeOptions } from "@mui/material/styles";
import { SxStyleType } from "../../../../types/theme-types.ts";
import { StyleConstants } from "../../../../constants/style-constants.ts";
import { SystemStyleObject } from "@mui/system/styleFunctionSx/styleFunctionSx";

interface ButtonProps extends PropsWithChildren {
  onClick?: (event: any) => void | null | Promise<void>;
  color?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  variant?: "text" | "outlined" | "contained";
  opacity?: number;
  sx?: SxProps<ThemeOptions>;
  disableRipple?: boolean;
  id?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  disabledStyles?: SystemStyleObject<any>;
  dataIntercomTarget?: string;
  dataTestId?: string;
}

interface ButtonStylesProps {
  color?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  opacity?: number;
  width?: string;
  height?: string;
  sx?: SxProps<any>;
  disabledStyles?: SystemStyleObject<any>;
}

const buttonStyles = ({
  backgroundColor,
  color,
  hoverBackgroundColor,
  hoverTextColor,
  opacity,
  width,
  height,
  sx = {},
  disabledStyles = {},
}: ButtonStylesProps): SxStyleType<"button"> => {
  const providedStyles = sx ?? {};
  const disabledStylesResult = disabledStyles ?? {};

  return {
    button: {
      bgcolor: backgroundColor,
      textTransform: "none",
      minWidth: "auto",
      color,
      width,
      height,
      "&:hover": {
        bgcolor: hoverBackgroundColor ?? "transparent",
        color: hoverTextColor,
        opacity,
      },
      "&:active": {
        bgcolor: hoverBackgroundColor ?? "transparent",
        color: hoverTextColor,
      },
      ...providedStyles,
      "&.Mui-disabled": { ...disabledStylesResult },
    },
  };
};

export const ButtonComponent = ({
  onClick,
  color = StyleConstants.textDark,
  backgroundColor,
  children,
  width,
  height,
  variant,
  hoverBackgroundColor,
  hoverTextColor,
  opacity,
  sx = {},
  disableRipple = true,
  id,
  type = "button",
  disabled,
  disabledStyles,
  dataIntercomTarget,
  dataTestId,
}: ButtonProps) => {
  const styles = buttonStyles({
    disabledStyles: disabled ? disabledStyles : {},
    hoverTextColor,
    hoverBackgroundColor,
    backgroundColor,
    color,
    opacity,
    width,
    height,
    sx,
  });

  return (
    <Button
      type={type}
      disabled={disabled}
      id={id}
      disableRipple={disableRipple}
      sx={styles.button}
      onClick={onClick}
      variant={variant}
      data-intercom-target={dataIntercomTarget}
      data-testid={dataTestId}
    >
      {children}
    </Button>
  );
};
