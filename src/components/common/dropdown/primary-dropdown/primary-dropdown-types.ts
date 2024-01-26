import { ReactNode } from 'react';
import { PopoverOrigin, SxProps } from '@mui/material';

export type DropdownOptionType = {
  id: number;
  variant: PrimaryDropdownVariant;
  content: string | ReactNode;
  title?: string;
  link?: string;
  openBlankPage?: boolean;
  value?: string;
};

export const enum PrimaryDropdownVariant {
  Standard = 'Standard',
  Link = 'Link',
}

export interface DropdownPositionProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export interface DropdownArrowSettings {
  isHidden?: boolean;
  distance?: number;
  color?: string;
}

export interface PrimaryDropdownProps {
  options: DropdownOptionType[];
  variant?: PrimaryDropdownVariant;
  onSelect?: (optionValue: string) => void;
  buttonContent?: ReactNode | string;
  defaultValue?: string | number;
  labelText?: string;
  wrapperSx?: SxProps;
  selectSx?: SxProps;
  arrowSettings?: DropdownArrowSettings;
  contentTopSpace?: number;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  bottomLineDistance?: number;
  dataIntercomTarget?: string;
}

export interface PrimaryDropdownItemProps {
  option: DropdownOptionType;
  variant?: PrimaryDropdownVariant;
  handleOption?: (option: DropdownOptionType) => void;
}
