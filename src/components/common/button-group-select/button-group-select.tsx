import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { buttonGroupSelectStyles } from "./button-group-select.styles.ts";
import { ReactNode } from "react";

interface ButtonGroupSelectProps {
  options: {
    id: number;
    content: string | ReactNode;
    value: any;
    width?: number;
  }[];
  onSelect: (selected: any) => void;
  selected: any;
  dataIntercomTarget?: string;
}

export function ButtonGroupSelect({
  options,
  onSelect,
  selected,
  dataIntercomTarget,
}: ButtonGroupSelectProps) {
  const styles = buttonGroupSelectStyles();

  return (
    <ToggleButtonGroup
      sx={{ height: "40px" }}
      data-intercom-target={dataIntercomTarget}
      exclusive
      value={selected}
      onChange={(_, selected: any) => selected && onSelect?.(selected)}
    >
      {options.map((option) => (
        <ToggleButton
          sx={{ ...styles.button, width: option.width ?? "auto" }}
          key={option.id}
          value={option.value}
        >
          {option.content}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
