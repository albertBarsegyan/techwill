import { RouterProvider } from "react-router-dom";
import { unauthenticatedRoutes } from "./routes/unauthenticated-routes.tsx";
import { useScreenSize } from "./hooks/use-screen-size.tsx";
import { BreakPointSize } from "./constants/breakpoints-constants.ts";
import { authenticatedRoutes } from "./routes/authenticated-routes.tsx";
import { useAuth } from "./hooks/use-auth.tsx";
import { Stack, Typography } from "@mui/material";

function App() {
  const screenWidth = useScreenSize();
  const { isAuthenticated } = useAuth();

  if (screenWidth <= BreakPointSize.Mobile) {
    return (
      <RouterProvider
        router={isAuthenticated ? authenticatedRoutes : unauthenticatedRoutes}
      />
    );
  }

  return (
    <Stack sx={{ height: "100vh" }} alignItems="center" justifyContent="center">
      <Typography
        textAlign="center"
        sx={{ fontSize: "48px", color: "lightColor" }}
      >
        Please use mobile device <br /> 😇 😇 😇
      </Typography>
    </Stack>
  );
}

export default App;
