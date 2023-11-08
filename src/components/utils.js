export function incrementAmount(arr, item, amount) {
  const cartItemsCopy = [...arr];
  const index = cartItemsCopy.findIndex(
    (cartItem) => cartItem.name === item.name
  );
  cartItemsCopy[index].amount += amount;
  return cartItemsCopy;
}

export function getSumTotal(cartItems) {
  return cartItems.reduce((total, item) => total + item.price, 0);
}
