import { createBrowserRouter } from 'react-router-dom';
import { UnauthenticatedRoutePath } from '../constants/route-constants.ts';

import { NavigateExternal } from '../components/common/navigate-external/navigate-external.tsx';
import { RedirectionPage } from "../pages/redirection-page/redirection-page.tsx";


export const unauthenticatedRoutes = createBrowserRouter([
  {
    path: UnauthenticatedRoutePath.Main,
    element: <RedirectionPage/>,
    errorElement: <div>Unauthenticated Error happened</div>,
  },
  {
    path: UnauthenticatedRoutePath.Navigate,
    element: <NavigateExternal url={UnauthenticatedRoutePath.Main}/>,
    errorElement: <div>Unauthenticated Error happened</div>,
  },
]);
