import { SxProps } from "@mui/material";

export interface ThemeType {
  primary: {
    main: string;
  };
  secondary: string;
  spacing: number;
  textDark: string;
  textDarker: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray500: string;
  gray600: string;
  teal500: string;
  lightColor: string;
  greenLight: string;
  redLight: string;
  redLighter: string;
  black500: string;
  iframeMainColor: string;
}

export type SxStyleType<T extends string> = Record<T, SxProps>;
