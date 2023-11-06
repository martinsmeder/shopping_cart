import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Exchange from './Exchange';
import Cart from './Cart';
import { useState } from 'react';

const Router = () => {
  const [cartItems, setCartItems] = useState([]);

  function handleBuyClick(item) {
    let cartData = {
      id: item.rank,
      name: item.name,
      price: item.price,
      amount: 1,
    };
    if (
      cartItems.some(
        (cartItem) =>
          cartItem.id === cartData.id || cartItem.name === cartData.name
      )
    ) {
      const itemCopy = { ...cartData, amount: cartData.amount + 1 };
      const updatedArray = cartItems.map((item) =>
        item.id === itemCopy.id ? itemCopy : item
      );
      setCartItems(updatedArray);
    } else {
      setCartItems([...cartItems, cartData]);
    }
  }

  // if same coin clicked twice, amount increases
  // --> get amount directly from cartItems array in order to increment

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: 'exchange',
      element: <Exchange cartItems={cartItems} clickHandler={handleBuyClick} />,
    },
    {
      path: 'cart',
      element: <Cart cartItems={cartItems} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
