export function updateItem(arr, item, amount, price) {
  // Copy array
  const cartItemsCopy = [...arr];
  // Find index of clicked item
  const index = cartItemsCopy.findIndex(
    (cartItem) => cartItem.name === item.name
  );
  // Set amount and price to input values
  cartItemsCopy[index].amount = amount;
  cartItemsCopy[index].price = price;

  // If input value is not higher than 0...
  if (!(cartItemsCopy[index].amount > 0)) {
    // ...filter out that item from the array...
    const filtered = cartItemsCopy.filter(
      (item) => item !== cartItemsCopy[index]
    );
    // ...and return the filtered array
    return filtered;
  }

  // Otherwise return the copied array with input values higher than 0
  return cartItemsCopy;
}

export function getSumTotal(cartItems) {
  return cartItems.reduce((total, item) => total + item.price, 0);
}
