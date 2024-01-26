import { ThemeType } from '../types/theme-types.ts';
import { ThemeOptions } from '@mui/material/styles';

export const StyleConstants: ThemeType = {
  primary: {
    main: '#02BF6F',
  },
  spacing: 8,
  textDark: '#5D676B',
  textDarker: '#2C3336',
  gray100: '#EFF3F6',
  gray200: '#DEE4E8',
  gray300: '#9FA6AD',
  gray500: '#838B97',
  gray600: '#929292',
  teal500: '#1D4842',
  lightColor: '#ffffff',
  greenLight: '#eefdf6',
  redLight: '#EE4C3B',
  redLighter: '#fffafa',
  black500: '#1B1B1E',
  iframeMainColor: '#edf4fc',
};

export const ZIndex = {
  LowestLayer: -9,
  FirstLayer: 9,
  SecondLayer: 99,
  ThirdLayer: 999,
  ForthLayer: 9999,
  FifthLayer: 99999,
};

export const lightThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
  palette: {
    mode: 'light',
    spacing: 8,
    primary: {
      main: '#02BF6F',
    },
    textDark: '#5D676B',
    textDarker: '#2C3336',
    gray100: '#EFF3F6',
    gray200: '#DEE4E8',
    gray300: '#9FA6AD',
    gray400: '#4D4D4D',
    gray500: '#838B97',
    gray600: '#929292',
    teal500: '#1D4842',
    lightColor: '#ffffff',
    greenLight: '#eefdf6',
    redLight: '#EE4C3B',
    redLighter: '#fffafa',
    black500: '#1B1B1E',
    iframeMainColor: '#edf4fc',
  },
};

export const DisabledButtonStyles = {
  bgcolor: '#F0F2F4',
  border: '1px solid #dee4e8',
  color: 'gray300',
};
