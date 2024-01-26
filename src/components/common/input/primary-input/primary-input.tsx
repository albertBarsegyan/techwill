import { primaryInputUseStyles } from './primary-input.styles.ts';
import { ReactNode } from 'react';
import { Box, SxProps, TextField } from '@mui/material';

interface PrimaryInputProps {
  onChange: (inputValue: string) => void;
  icon?: ReactNode | string;
  value: string;
  placeholder?: string;
  wrapperSx?: SxProps;
  sx?: SxProps;
  dataIntercomTarget?: string;
}

export function PrimaryInput({
  onChange,
  value,
  icon,
  placeholder,
  wrapperSx,
  sx,
  dataIntercomTarget,
}: PrimaryInputProps) {
  const styles = primaryInputUseStyles({ wrapperSx, sx });

  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    onChange(inputValue);
  };

  return (
    <Box sx={styles.inputWrapper} data-intercom-target={dataIntercomTarget}>
      <TextField fullWidth value={value} placeholder={placeholder} onChange={handleChange} sx={styles.input} />

      <Box sx={styles.iconWrapper}>{icon}</Box>
    </Box>
  );
}
