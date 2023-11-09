export function updateItem(arr, item, amount, price) {
  const cartItemsCopy = [...arr];
  const index = cartItemsCopy.findIndex(
    (cartItem) => cartItem.name === item.name
  );
  cartItemsCopy[index].amount = amount;
  cartItemsCopy[index].price = price;
  return cartItemsCopy;
}

export function getSumTotal(cartItems) {
  return cartItems.reduce((total, item) => total + item.price, 0);
}
