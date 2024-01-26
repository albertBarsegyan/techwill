import { ReactNode } from 'react';

import { dropdownItemStyles } from './dropdown-item.styles.ts';
import { Box, SxProps } from '@mui/material';


export const DropdownItem = ({
                               children,
                               hasSeparator,
                               sx,
                             }: {
  children: ReactNode | string;
  hasSeparator?: boolean;

  sx?: SxProps;
}) => {
  const styles = dropdownItemStyles({hasSeparator});

  const allStyles = Object.assign({}, styles.dropdownItemContainer, sx);

  return <Box sx={allStyles}>{children}</Box>;
};

