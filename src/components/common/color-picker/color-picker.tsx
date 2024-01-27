import { ChromePicker } from "react-color";
import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { colorPickerStyles } from "./color-picker.styles.ts";
import { useOutsideClick } from "../../../hooks/outside-click-hook.tsx";

interface CustomColorPickerProps {
  title?: string;
  handleColor: (color: string) => void;
  color: string;
}

export const ColorPicker: React.FC<CustomColorPickerProps> = ({
  handleColor,
  color = "#000000",
  title,
}) => {
  const styles = colorPickerStyles({ color });
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const pickerRef = useRef<HTMLDivElement | null>(null);

  const handleToggleColorPicker = () => setDisplayColorPicker((prev) => !prev);

  const onChange = (color: any) => handleColor(color.hex);

  useOutsideClick(pickerRef, () => setDisplayColorPicker(false));

  return (
    <>
      {title && (
        <Box sx={styles.titleContainer}>
          <Typography>{title}</Typography>
        </Box>
      )}

      <Box sx={styles.pickerWrapper} onClick={handleToggleColorPicker}>
        <Box sx={styles.pickerColorBox}></Box>

        <Box sx={styles.colorNameBox} className="colorNameBox">
          {color}
        </Box>
      </Box>

      {displayColorPicker ? (
        <div ref={pickerRef}>
          <ChromePicker disableAlpha color={color} onChange={onChange} />
        </div>
      ) : null}
    </>
  );
};
