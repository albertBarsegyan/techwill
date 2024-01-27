import { createBrowserRouter } from "react-router-dom";
import { UnauthenticatedRoutePath } from "../constants/route-constants.ts";

import { NavigateExternal } from "../components/common/navigate-external/navigate-external.tsx";
import { LoginPage } from "../pages/login-page/login-page.tsx";

export const unauthenticatedRoutes = createBrowserRouter([
  {
    path: UnauthenticatedRoutePath.Login,
    element: <LoginPage />,
    errorElement: <div>Unauthenticated Error happened</div>,
  },
  {
    path: UnauthenticatedRoutePath.Navigate,
    element: <NavigateExternal url={UnauthenticatedRoutePath.Login} />,
    errorElement: <div>Unauthenticated Error happened</div>,
  },
]);
