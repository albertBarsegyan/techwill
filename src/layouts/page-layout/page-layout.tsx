import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <Box sx={{ padding: "0 20px", height: "100vh", paddingTop: "30px" }}>
      {children}
    </Box>
  );
}
