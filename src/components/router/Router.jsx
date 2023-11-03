import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import NotHome from './NotHome';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: 'nothome/',
      element: <NotHome />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
