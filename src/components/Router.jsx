import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Exchange from './Exchange';
import Cart from './Cart';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: 'exchange',
      element: <Exchange />,
    },
    {
      path: 'cart',
      element: <Cart />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
