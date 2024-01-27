import { separatorStyles } from "./separator-styles.ts";
import { Box } from "@mui/material";

interface SeparatorProps {
  width?: string;
  height?: string;
  color?: string;
  topSpace?: number;
  bottomSpace?: number;
}

export function Separator({
  width = "100%",
  height = "1px",
  color,
  topSpace,
  bottomSpace,
}: SeparatorProps) {
  const styles = separatorStyles({ color, topSpace, bottomSpace });

  return (
    <Box
      style={{ width, height, background: color }}
      sx={styles.separator}
    ></Box>
  );
}
