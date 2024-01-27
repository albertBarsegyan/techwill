import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthenticatedRoutePath } from "../constants/route-constants.ts";
import { HomePage } from "../pages/home-page/home-page.tsx";

const RouteErrorElement = <div>Something went wrong</div>;

export const authenticatedRoutes = createBrowserRouter([
  {
    path: AuthenticatedRoutePath.Dashboard(),
    element: <HomePage />,
    errorElement: RouteErrorElement,
  },

  {
    path: AuthenticatedRoutePath.Navigate(),
    element: <Navigate to={AuthenticatedRoutePath.Dashboard()} />,
    errorElement: RouteErrorElement,
  },
]);
