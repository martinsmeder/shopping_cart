import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Exchange from './Exchange';
import Cart from './Cart';
import { useEffect, useState } from 'react';
import { incrementAmount, getSumTotal } from './utils';

const Router = () => {
  const [currentItem, setCurrentItem] = useState({});
  const [buyAmount, setBuyAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0);
  const [sumTotal, setSumTotal] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setSumTotal(getSumTotal(cartItems));
  }, [cartItems]);

  function handleBuyClick(item) {
    setShowPopup(true);
    const cartData = {
      id: item.rank,
      name: item.name,
      price: item.price,
      amount: null,
    };
    setCurrentItem(cartData);
  }

  function handleBuyChange(e) {
    setPriceTotal(e.target.value * currentItem.price);
    setBuyAmount(e.target.value);
  }

  function handleBuySubmit() {
    let currentItemCopy = { ...currentItem };

    if (cartItems.some((cartItem) => cartItem.name === currentItem.name)) {
      const updatedArray = incrementAmount(cartItems, currentItem, buyAmount);
      setCartItems(updatedArray);
      // Find better solution for this!
    } else {
      currentItemCopy.amount = parseFloat(buyAmount);
      currentItemCopy.price = priceTotal;
      if (currentItemCopy.price > 0)
        setCartItems([...cartItems, currentItemCopy]);
    }
    setShowPopup(false);
    setPriceTotal(0);
    setBuyAmount(0);
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
          changeHandler={handleBuyChange}
          submitHandler={handleBuySubmit}
          priceTotal={priceTotal}
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
