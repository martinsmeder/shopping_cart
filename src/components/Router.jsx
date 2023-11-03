import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Exchange from './Exchange';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      // Clicking on exchange twice throws an error?
      path: 'exchange/',
      element: <Exchange />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
