import { PropsWithChildren } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { lightThemeOptions } from "../../constants/style-constants.ts";

export function ThemeProvider({ children }: PropsWithChildren) {
  const theme = createTheme(lightThemeOptions);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
