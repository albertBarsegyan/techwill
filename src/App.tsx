import { RouterProvider } from 'react-router-dom';
import { unauthenticatedRoutes } from './routes/unauthenticated-routes.tsx';


function App() {
  return <RouterProvider router={unauthenticatedRoutes}/>;
}

export default App;
