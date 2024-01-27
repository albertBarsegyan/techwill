import { Chip } from "@mui/material";
import { ChipAddIcon, ChipDeleteIcon } from "../../../../icons/chip-icons.tsx";
import { primaryChipStyles } from "./primary-chip.styles.ts";

interface PrimaryChipProps {
  isSelected: boolean;
  label: string;
  onDelete?: () => void;
}

export function PrimaryChip({ isSelected, label, onDelete }: PrimaryChipProps) {
  const styles = primaryChipStyles();

  return (
    <Chip
      deleteIcon={
        <div style={{ paddingRight: "12px" }}>
          {isSelected ? <ChipDeleteIcon /> : <ChipAddIcon />}
        </div>
      }
      onDelete={onDelete}
      label={label}
      sx={styles.chip(isSelected)}
      variant="outlined"
    />
  );
}
