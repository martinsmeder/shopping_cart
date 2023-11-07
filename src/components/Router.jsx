import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Exchange from './Exchange';
import Cart from './Cart';
import { useState } from 'react';
import { incrementAmount, getSumTotal } from './utils';

const Router = () => {
  const [cartItems, setCartItems] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // function handleBuyClick(item) {
  //   // If cartItems array includes clicked item...
  //   if (cartItems.some((cartItem) => cartItem.name === item.name)) {
  //     // Increment item.amount at clicked index, and update cartItems state
  //     const updatedArray = incrementAmount(cartItems, item);
  //     setCartItems(updatedArray);
  //   } else {
  //     // Otherwise create new item, and update cartItems state
  //     const cartData = {
  //       id: item.rank,
  //       name: item.name,
  //       price: item.price,
  //       amount: 1,
  //     };
  //     setCartItems([...cartItems, cartData]);
  //   }
  //   // Always update sumTotal state
  //   setSumTotal(getSumTotal(cartItems));
  // }

  function handleBuyClick(item) {
    setShowPopup(true);
  }

  function handleBuySubmit() {
    setShowPopup(false);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: 'exchange',
      element: (
        <Exchange
          cartItems={cartItems}
          clickHandler={handleBuyClick}
          submitHandler={handleBuySubmit}
          showPopup={showPopup}
        />
      ),
    },
    {
      path: 'cart',
      element: <Cart cartItems={cartItems} sumTotal={sumTotal} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
