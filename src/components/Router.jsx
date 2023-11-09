import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Exchange from './Exchange';
import Cart from './Cart';
import { useEffect, useState } from 'react';
import { updateItem, getSumTotal } from './utils';

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
    const existingItem = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem) {
      setShowPopup(true);
      // If the item is already in the cart, set the state with its values
      setCurrentItem({
        id: existingItem.id,
        name: existingItem.name,
        price: existingItem.price,
        amount: existingItem.amount,
      });
      setBuyAmount(existingItem.amount); // Set buyAmount with the existing amount
      setPriceTotal(existingItem.price * existingItem.amount); // Set priceTotal accordingly
    } else {
      // If it's not in the cart, proceed as usual
      setShowPopup(true);
      const cartData = {
        id: item.rank,
        name: item.name,
        price: item.price,
        amount: null,
      };
      setCurrentItem(cartData);
    }
  }

  function handleBuyChange(e) {
    setPriceTotal(e.target.value * currentItem.price);
    setBuyAmount(e.target.value);
  }

  function handleBuySubmit() {
    let currentItemCopy = { ...currentItem };

    // If item with same name as clicked item exists in cartItems array...
    if (cartItems.some((cartItem) => cartItem.name === currentItem.name)) {
      // ... modify existing item at index position and update cartItems state
      const updatedArray = updateItem(
        cartItems,
        currentItem,
        buyAmount,
        priceTotal
      );
      setCartItems(updatedArray);
    } else {
      // ... otherwise add new item to cartItems
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
          value={buyAmount}
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
