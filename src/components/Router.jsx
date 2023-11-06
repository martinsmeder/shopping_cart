import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Exchange from './Exchange';
import Cart from './Cart';
import { useState } from 'react';

const Router = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'fakeCoin', price: 100 },
  ]);

  function handleBuyClick() {
    const newCartItems = [
      { id: 2, name: 'bitcoin', price: 34000 },
      { id: 3, name: 'ethereum', price: 1893 },
    ];

    setCartItems([...cartItems, ...newCartItems]);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: 'exchange',
      element: <Exchange cartItems={cartItems} handleClick={handleBuyClick} />,
    },
    {
      path: 'cart',
      element: <Cart cartItems={cartItems} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
