import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AuthenticatedRoutePath } from '../constants/route-constants.ts';

const RouteErrorElement = <div>Something went wrong</div>;

export const authenticatedRoutes = createBrowserRouter([
  {
    path: AuthenticatedRoutePath.Navigate(),
    element: <Navigate to={AuthenticatedRoutePath.Dashboard()} />,
    errorElement: RouteErrorElement,
  },
]);
