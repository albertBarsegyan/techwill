declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    typography: { fontFamily: string };
    palette: {
      mode: "light" | "dark";
      spacing: number;
      primary: {
        main: string;
      };
      textDark: string;
      textDarker: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      teal500: string;
      lightColor: string;
      greenLight: string;
      redLight: string;
      redLighter: string;
      black500: string;
      iframeMainColor: string;
    };
  }
}
